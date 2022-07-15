import {
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
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {merge, takeWhile} from 'rxjs';
import {TaskService} from '../../services/task.service';
import {IOptionInterface} from '../../../entities/interfaces/option.interface';
import {ReportsButtonEnum} from '../../../entities/enums/reports-button.enum';

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent implements OnInit, OnChanges, OnDestroy {
	@Input() public dataSource: ITask[] = [];
	@Input() public columns: ITableColumn[] = [];
	@Input() public day: Date;
	@Input() public value: string = '';
	@Input() public actionHanding: IOptionInterface;
	@Input() public reportButtonAction: ReportsButtonEnum;

	@Output() public readonly outChangeTime = new EventEmitter<IHours>();
	@Output() optionSelected = new EventEmitter<string>();

	public tableForm: FormGroup;
	public filterDataSource: ITask[] = [];
	public allChecked: boolean = false;
	public sumTime: IHours = DEFAULT_TIME;
	public displayedColumns: string[] = [];
	private isSub = true;

	public readonly columnType = ColumnType;
	public readonly projects: IProject[] = PROJECT_MOCK;
	public readonly status = Status;
	public readonly options = Object.values(OPTIONS_CONFIG);

	constructor(
		public dialog: MatDialog,
		private formBuilder: FormBuilder,
		private taskService: TaskService,
		private cd: ChangeDetectorRef,
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
				rowCtrl.push(this.setRowsFormArray(row, index));
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

	private setRowsFormArray(row: ITask, index: number) {
		return this.formBuilder.group({
			rowIndex: [index],
			title: [row.title, Validators.required],
			time: [row.time, [Validators.required, Validators.pattern('[0-9]+')]],
			overtime: [row.overtime, [Validators.required, Validators.pattern('[0-9]+')]],
		});
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.actionHanding && this.actionHanding) {
			this.taskService.ChangeActionBtn(
				this.actionHanding,
				this.filterDataSource.filter((tasks) => tasks.checked),
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
		if (changes.reportButtonAction && changes.reportButtonAction.currentValue) {
			this.reportButtonHanding(this.reportButtonAction);
		}
	}

	public reportButtonHanding(button: ReportsButtonEnum): void {
		if (button === ReportsButtonEnum.AddTask) {
			const defaultProject: IProject = PROJECT_MOCK[0];
			const newTask: ITask = {
				date: this.day,
				checked: false,
				title: '',
				project: defaultProject,
				status: Status.InProgress,
				time: 0,
				overtime: 0,
				paid: false,
				asanaLink: '',
				bitbucketLink: '',
				newRow: true,
			};
			this.dataSource = [...this.dataSource, newTask];
			this.filterDataSource = this.dataSource;
			this.setRowsForm();
			setTimeout(() => {
				this.cd.detectChanges();
			}, 100);
			return;
		}
		if (button === ReportsButtonEnum.Save) {
			const filterArr = this.filterDataSource.filter((task) => task.newRow);
			this.taskService.reportsBtnSave(filterArr);
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

	public changeFieldValue(newData: ITask, rowIndex: number, updateTime: boolean = false): void {
		updateTime =
			this.dataSource[rowIndex].time !== +newData.time ||
			this.dataSource[rowIndex].overtime !== +newData.overtime;
		this.dataSource[rowIndex] = {
			...this.dataSource[rowIndex],
			title: newData.title,
			time: +newData.time,
			overtime: +newData.overtime,
		};
		if (updateTime) {
			this.getSum(['time', 'overtime']);
		}
	}

	public getSum(fields: HoursKeys[]): void {
		fields.forEach((field) => {
			this.sumTime[field] = this.dataSource.reduce((acc, curr) => {
				return acc + curr[field];
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
			return item.title.toLowerCase().includes(this.value.toLowerCase());
		});
		if (this.value === '') {
			this.filterDataSource = this.dataSource;
		}
	}

	ngOnDestroy() {
		this.isSub = false;
	}
}
