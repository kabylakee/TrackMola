import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import {ColumnType} from 'src/app/entities/enums/column-type.enum';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent implements OnInit, OnChanges {
	@Input() public dataSource: ITask[] = [];

	@Input() public columns: ITableColumn[] = [];

	@Input() public value: string = '';

	public allChecked: boolean = false;

	public readonly columnType = ColumnType;

	public displayedColumns: string[] = [];

	public ngOnInit(): void {
		console.log(this.value);
		this.displayedColumns = this.columns.map((i) => i.id);
	}

	public ngOnChanges(): void {
		console.log(this.value);
		// this.search(this.value,  'gfdfghgfd');
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

	public search(event: string, column: ITableColumn, elem: ITask): void {
		if (column.field === 'title') {
			console.log(elem[column.field], event);
		}
	}
}
