import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {ColumnType} from 'src/app/entities/enums/column-type.enum';
import {Status} from 'src/app/entities/enums/status.enum';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
	allChecked: boolean = false;

	dataSource: ITask[] = [
		{
			checked: false,
			title: 'Task1',
			project: PROJECT_MOCK[0],
			status: Status.Done,
			time: 4,
			overtime: 0,
			paid: true,
			asanaLink: '',
		},
	];

	columns: ITableColumn[] = [
		{
			id: '0',
			type: ColumnType.CHECK_ALL,
			cls: 'check-all-column',
			title: 'Checked',
			field: 'checked',
		},
		{
			id: '1',
			type: ColumnType.INPUT,
			cls: 'input-column',
			title: 'Task',
			field: 'title',
		},
		{
			id: '2',
			type: ColumnType.PROJECT,
			cls: 'project-column',
			title: 'Project',
			field: 'project',
		},
		{
			id: '3',
			type: ColumnType.STATUS,
			cls: 'status-column',
			title: 'Status',
			field: 'status',
		},
		{
			id: '4',
			type: ColumnType.INPUT,
			cls: 'input-column',
			title: 'Time',
			field: 'time',
		},
		{
			id: '5',
			type: ColumnType.INPUT,
			cls: 'input-column',
			title: 'Overtime',
			field: 'overtime',
		},
		{
			id: '6',
			type: ColumnType.CHECK,
			cls: 'check-column',
			title: 'Paid',
			field: 'paid',
		},
		{
			id: '7',
			type: ColumnType.LINK,
			cls: 'link-column',
			title: 'Asana Link',
			field: 'asanaLink',
		},
		{
			id: '8',
			type: ColumnType.OPTIONS,
			cls: 'options-column',
			title: 'Options',
			field: 'options',
		},
	];

	displayedColumns: string[] = this.columns.map((i) => i.id);

	// When you click subcheckbox update main checkbox
	updateAllChecked(): void {
		this.allChecked =
			this.dataSource.filter((t) => t.checked == true).length === this.dataSource.length;
	}

	// When you click main checkbox update subcheckboxes
	setAll(checked: boolean): void {
		this.allChecked = checked;
		if (this.dataSource) {
			this.dataSource.forEach((t) => (t.checked = checked));
		}
	}
}
