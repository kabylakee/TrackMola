import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
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

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent implements OnInit {
	@Input() public dataSource: ITask[] = [];
	@Input() public columns: ITableColumn[] = [];

	@Output() public readonly outChangeTime = new EventEmitter<IHours>();
	@Output() optionSelected = new EventEmitter<string>();

	public allChecked: boolean = false;
	public sumTime: IHours = DEFAULT_TIME;
	public displayedColumns: string[] = [];

	public readonly columnType = ColumnType;
	public readonly projects: IProject[] = PROJECT_MOCK;
	public readonly status = Status;
	public readonly options = Object.values(OPTIONS_CONFIG);

	constructor(public dialog: MatDialog) {}

	public ngOnInit(): void {
		this.displayedColumns = this.columns.map((i) => i.id);
		this.getSum(['time', 'overtime']);
	}

	// When you click subcheckbox update main checkbox
	public updateAllChecked(): void {
		this.allChecked = this.dataSource.filter((t) => t.checked).length === this.dataSource.length;
	}

	// When you click main checkbox update subcheckboxes
	public setAll(checked: boolean): void {
		this.allChecked = checked;
		if (this.dataSource) {
			this.dataSource.forEach((t) => (t.checked = checked));
		}
	}

	// Open dialog window at bottom of your cursor
	public openDialog(x: number, y: number, asanaLink: string, bitbucketLink: string) {
		const dialogRef = this.dialog.open(LinkDialogComponent, {
			position: {
				top: `${y + 20}px`,
				left: `${x - 330}px`,
			},
			data: {
				asanaLink: asanaLink,
				bitbucketLink: bitbucketLink,
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}

	public changeFieldValue(event: number, column: ITableColumn, elem: ITask): void {
		if ((column.field === 'time' || column.field === 'overtime') && event == +event) {
			elem[column.field] = +event;
			this.getSum([column.field]);
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
}
