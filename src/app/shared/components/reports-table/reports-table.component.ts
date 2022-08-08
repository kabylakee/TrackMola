import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import {ColumnType} from 'src/app/entities/enums/column-type.enum';
import {Status} from 'src/app/entities/enums/status.enum';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {MatDialog} from '@angular/material/dialog';
import {LinkDialogComponent} from '../link-dialog/link-dialog.component';
import {HoursKeys, IHours} from '../../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../../entities/constants/hours.constants';
import {OPTIONS_CONFIG} from 'src/app/entities/constants/options.constants';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {merge, takeWhile} from 'rxjs';
import {TaskService} from '../../services/task.service';
import {IOptionInterface} from '../../../entities/interfaces/option.interface';
import {ReportsButtonEnum} from '../../../entities/enums/reports-button.enum';
import {NewTask} from '../../../entities/constants/new-task.class';
import {Size} from 'src/app/entities/enums/size.enum';
import {OptionsTitle} from '../../../entities/enums/options.enum';
import {TableDataType} from 'src/app/entities/types/table-data.type';
import {ViewReportComponent} from '../view-report/view-report.component';
import {ReportStatus} from 'src/app/entities/enums/report-status.enum';
import {VacationService} from '../../services/vacation.service';
import {IManagementRequest, IVacationRequest} from 'src/app/entities/interfaces/request.interface';
import {SELECT_ALL} from '../../../entities/constants/formats.constants';

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class ReportsTableComponent implements OnInit, OnChanges, OnDestroy {
	@Input() public dataSource: TableDataType[] = [];
	@Input() public columns: ITableColumn[] = [];
	@Input() public day: Date;
	@Input() public value: string = '';
	@Input() public actionHanding: IOptionInterface;
	@Input() public reportButtonAction: ReportsButtonEnum;
	@Input() public searchValue = '';
	@Input() public selectProject = SELECT_ALL;

	@Input() public selectedProject: IProject = PROJECT_MOCK[0];
	@Output() public readonly outChangeTime = new EventEmitter<IHours>();
	@Output() public optionSelected = new EventEmitter<string>();
	@Output() public disableSave = new EventEmitter<boolean>();
	@Output() public action = new EventEmitter();

	public OptionsTitle = OptionsTitle;
	public tableForm: FormGroup;
	public filterDataSource: TableDataType[] = [];
	public allChecked: boolean = false;
	public sumTime: IHours = DEFAULT_TIME;
	public displayedColumns: string[] = [];
	public reportStatus = ReportStatus;
	private isSub = true;
	private checkedRows = new Set<TableDataType>();

	public readonly columnType = ColumnType;
	public readonly projects: IProject[] = PROJECT_MOCK;
	public readonly status = Status;
	public readonly size = Size;
	public readonly options = Object.values(OPTIONS_CONFIG);

	constructor(
		public dialog: MatDialog,
		private formBuilder: FormBuilder,
		private taskService: TaskService,
		private cd: ChangeDetectorRef,
		private vacationService: VacationService,
	) {}

	public ngOnInit(): void {
		this.displayedColumns = this.columns.map((i) => i.id);
		this.tableForm = this.formBuilder.group({
			rows: this.formBuilder.array([]),
		});

		this.setRowsForm();

		this.getSum(['time', 'overtime']);
	}

	private setRowsForm() {
		if (this.tableForm) {
			(this.tableForm.get('rows') as FormArray).controls = [];
			const rowCtrl = this.tableForm.get('rows') as FormArray;
			this.dataSource.forEach((row, index) => {
				rowCtrl.push(this.setRowsFormArray(row as ITask, index));
			});
			merge(
				...(this.tableForm.get('rows') as FormArray).controls.map(
					(control) => control.valueChanges,
				),
			)
				.pipe(takeWhile(() => this.isSub))
				.subscribe((data) => {
					this.changeFieldValue(data, data.rowIndex);
				});
		}
	}

	private setRowsFormArray(row: TableDataType, index: number) {
		if ('time' in row) {
			row = row as ITask;
			return this.formBuilder.group({
				rowIndex: [index],
				title: [row.title, Validators.required],
				time: [row.time, [Validators.required, Validators.pattern('[0-9]+')]],
				overtime: [row.overtime, [Validators.pattern('[0-9]+')]],
				project: [row.project, Validators.required],
			});
		}
		if ('period' in row) {
			row = row as IVacationRequest;
			return this.formBuilder.group({
				rowIndex: [index],
				notes: [row.notes, new FormControl('')],
				period: [row.period, new FormControl('')],
				project: [row.project, Validators.required],
			});
		}
		if ('paidOvertime' in row) {
			row = row as IManagementRequest;
			return this.formBuilder.group({
				rowIndex: [index],
			});
		}
		return;
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.actionHanding && this.actionHanding) {
			this.taskService.ChangeActionBtn(
				this.actionHanding,
				this.filterDataSource.filter((tasks) => tasks.checked) as ITask[],
			);
		}
		if (changes.optionSelected && this.optionSelected) {
			this.taskService.ChangeActionBtn(
				this.actionHanding,
				this.filterDataSource.filter((tasks) => tasks.checked) as ITask[],
			);
		}
		if (changes.dataSource?.currentValue) {
			this.filterDataSource = this.dataSource;
			this.setRowsForm();
			this.updateAllChecked();
			setTimeout(() => {
				this.getSum(['time', 'overtime']);
			});
		}
		if (changes.value) {
			this.searchTaskField();
		}
		if (changes.reportButtonAction?.currentValue) {
			this.reportButtonHanding(this.reportButtonAction);
		}
		if (changes.searchValue) {
			this.searchUserName();
		}
		if (changes.selectProject?.currentValue) {
			this.changeSelectedProject();
		}
	}

	public approvedSelected(): void {
		this.dataSource
			.filter((request) => request.checked)
			.forEach((request) => this.approve(request));
	}

	public reportButtonHanding(button: ReportsButtonEnum): void {
		if (button === ReportsButtonEnum.AddTask) {
			const defaultProject: IProject = PROJECT_MOCK[0];
			const newTask = new NewTask(
				this.day,
				false,
				'',
				defaultProject,
				Status.InProgress,
				0,
				0,
				false,
				'',
				'',
				true,
			);
			this.dataSource = [...this.dataSource, newTask];
			this.filterDataSource = this.dataSource;
			this.setRowsForm();
			(this.tableForm.get('rows') as FormArray).controls[
				this.dataSource.length - 1
			].statusChanges.subscribe((status) => {
				this.disableSave.emit(status === 'INVALID');
			});
			this.cd.detectChanges();
			return;
		}
		if (button === ReportsButtonEnum.Save) {
			const filterArr = this.filterDataSource.filter((task) => (task as ITask).newRow);
			this.taskService.saveTask(filterArr as ITask[]);
			return;
		}
		// if (button === ReportsButtonEnum.Submit) {
		//To DO Submit
		// }
	}

	// When you click subcheckbox update main checkbox
	public updateAllChecked(): void {
		this.allChecked =
			this.filterDataSource.filter((t) => t.checked).length === this.filterDataSource.length;
	}

	// When you click main checkbox update subcheckboxes
	public setAll(checked: boolean): void {
		this.allChecked = checked;
		if (this.filterDataSource) {
			this.filterDataSource.forEach((t) => (t.checked = checked));
		}
		this.taskService.setDisabledOptionBtn(!this.allChecked);
	}

	// Open dialog window at bottom of your cursor
	public openDialog(x: number, y: number, element: ITask) {
		const dialogRef = this.dialog.open(LinkDialogComponent, {
			position: {
				top: `${y + 20}px`,
				left: `${x - 330}px`,
			},
			data: {
				asanaLink: element.asanaLink,
				bitbucketLink: element.bitbucketLink,
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				element.asanaLink = result.asanaLink;
				element.bitbucketLink = result.bitbucketLink;
				this.cd.detectChanges();
			}
		});
	}

	public updateChecked(checked: boolean, row: ITask): void {
		row.checked = checked;
		this.updateAllChecked();
		if (checked) {
			this.taskService.setDisabledOptionBtn(!checked);
			return;
		}
		const someChecked = this.filterDataSource.some((task) => task.checked);
		this.taskService.setDisabledOptionBtn(!someChecked);
	}

	public approve(element: TableDataType): void {
		if ('paidOvertime' in element) {
			element.status = ReportStatus.Approved;
		} else if ('period' in element) {
			element.approved = true;
			this.vacationService.updateVacation(element);
			this.action.emit();
		}
	}

	public decline(element: TableDataType): void {
		if ('paidOvertime' in element) {
			element.status = ReportStatus.Declined;
		} else if ('period' in element) {
			this.vacationService.removeVacation(element);
			this.action.emit();
		}
	}

	public changeFieldValue(newData: ITask, rowIndex: number, updateTime: boolean = false): void {
		updateTime =
			(this.dataSource[rowIndex] as ITask).time !== +newData.time ||
			(this.dataSource[rowIndex] as ITask).overtime !== +newData.overtime;
		this.dataSource[rowIndex] = {
			...this.dataSource[rowIndex],
		};
		if (updateTime) {
			this.getSum(['time', 'overtime']);
		}
		// this.filterDataSource = [...this.dataSource];
		this.cd.detectChanges();
	}

	public getSum(fields: HoursKeys[]): void {
		fields.forEach((field) => {
			this.sumTime[field] = this.dataSource.reduce((acc, curr) => {
				return acc + (curr as ITask)[field];
			}, 0);
		});
		this.outChangeTime.emit(this.sumTime);
	}

	// Format input value to blank string when 0 value
	public inputFormater(value: number): string {
		return value ? `${value}` : '';
	}

	public searchTaskField(): void {
		this.filterDataSource = this.dataSource.filter((item) => {
			return (item as ITask).title.toLowerCase().includes(this.value.toLowerCase());
		});
		if (this.value === '') {
			this.filterDataSource = this.dataSource;
		}
	}

	public onActionHandingBtn(date: Date | null, action: OptionsTitle, row: ITask): void {
		this.taskService.ChangeActionBtn({date: date as Date, action}, [row]);
	}

	public getColor(projectColor: string): {[k: string]: string} {
		return {color: `rgb(${projectColor})`, 'background-color': `rgba(${projectColor}, 0.2)`};
	}

	// Open Dialog by click VIEW button
	public viewReport(element: IManagementRequest): void {
		const dialogRef = this.dialog.open(ViewReportComponent, {
			position: {
				top: 'calc(50vh - 7.5 * var(--offset))',
				left: 'calc(10vw)',
			},
			data: {
				dataSource: element,
			},
			width: 'calc(80vw)',
		});

		dialogRef.afterClosed().subscribe((result: ReportStatus) => {
			switch (result) {
				case this.reportStatus.Approved:
					this.approve(element); // Approve button
					break;
				case this.reportStatus.Declined:
					this.decline(element); // Decline button
					break;
				default:
					break; // Cross button
			}
			this.cd.detectChanges(); // Reload status state at management table after close dialog
		});
	}

	public searchUserName(): void {
		this.filterDataSource = this.dataSource.filter((item) => {
			return (item as IManagementRequest).name
				.toLowerCase()
				.includes(this.searchValue.toLowerCase());
		});
		if (this.searchValue === '') {
			this.filterDataSource = this.dataSource;
		}
	}

	public changeSelectedProject(): void {
		this.filterDataSource = this.dataSource.filter((item) => {
			return item.project.title === this.selectProject;
		});
		if (this.selectProject === SELECT_ALL) {
			this.filterDataSource = this.dataSource;
		}
	}

	public ngOnDestroy(): void {
		this.isSub = false;
	}

	public compareProjectObjects(o1: IProject, o2: IProject): boolean {
		return o1.title === o2.title;
	}
}
