import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MODAL_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TableDataType} from 'src/app/entities/types/table-data.type';

@Component({
	selector: 'app-view-report',
	templateUrl: './view-report.component.html',
	styleUrls: ['./view-report.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewReportComponent {
	public columns: ITableColumn[];
	public tasks: ITask[];

	constructor(
		private dialogRef: MatDialogRef<ViewReportComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ViewDialogData,
	) {
		this.columns = MODAL_TABLE_CONFIG;
		this.tasks = data.dataSource as ITask[]; // TODO: map data to ITask[] or another new interface
	}
}

export interface ViewDialogData {
	dataSource: TableDataType[];
}
