import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ColumnType} from 'src/app/entities/enums/column-type.enum';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent implements OnInit {
	@Input() public dataSource: ITask[] = [];

	@Input() public columns: ITableColumn[] = [];

	public allChecked: boolean = false;

	public readonly columnType = ColumnType;

	public displayedColumns: string[] = [];

	public ngOnInit(): void {
		this.displayedColumns = this.columns.map((i) => i.id);
	}

	// When you click subcheckbox update main checkbox
	public updateAllChecked(): void {
		this.allChecked =
			this.dataSource.filter((t) => t.checked == true).length === this.dataSource.length;
	}

	// When you click main checkbox update subcheckboxes
	public setAll(checked: boolean): void {
		this.allChecked = checked;
		if (this.dataSource) {
			this.dataSource.forEach((t) => (t.checked = checked));
		}
	}
}
