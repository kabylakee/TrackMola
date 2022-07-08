import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import {ColumnType} from 'src/app/entities/enums/column-type.enum';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {HoursKeys, IHours} from '../../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../../entities/constants/hours.constants';

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent implements OnInit, OnChanges {
	@Input() public dataSource: ITask[] = [];

	@Input() public columns: ITableColumn[] = [];

	@Output() public readonly outChangeTime = new EventEmitter<IHours>();

	@Input() public value: string = '';

	public filterDataSource: ITask[] = [];

	public allChecked: boolean = false;

	public sumTime: IHours = DEFAULT_TIME;

	public readonly columnType = ColumnType;

	public displayedColumns: string[] = [];

	public ngOnInit(): void {
		this.displayedColumns = this.columns.map((i) => i.id);
		this.getSum(['time', 'overtime']);
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.dataSource) {
			this.filterDataSource = this.dataSource;
		}
		if (changes.value) {
			console.log(
				'Changes value',
				changes.value,
				this.filterDataSource,
				'DataSource',
				this.dataSource,
			);
			// this.filterDataSource = this.dataSource;
			this.getTaskField();
		}
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

	public getTaskField(): void {
		console.log(this.dataSource);
		console.log(this.value);
		this.filterDataSource = this.dataSource.filter((item) => {
			return item.title.toLowerCase().includes(this.value.toLowerCase());
		});
		if (this.value === '') {
			this.filterDataSource = this.dataSource;
		}
		console.log(this.dataSource);
		console.log(this.value);
		// }
	}

	public changeFieldValue(event: string, column: ITableColumn, elem: ITask): void {
		// if ((column.field === 'time' || column.field === 'overtime') && event == +event) {
		// 	elem[column.field] = +event;
		// 	console.log('getSum');
		// 	//this.getSum([column.field]);
		// }
		if (column.field === 'title') {
			elem[column.field] = event;
			this.getTaskField();
		}
	}
}
