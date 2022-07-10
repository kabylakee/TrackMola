import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {OPTIONS_CONFIG} from 'src/app/entities/constants/options.constants';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {ColumnType} from 'src/app/entities/enums/column-type.enum';
import {Status} from 'src/app/entities/enums/status.enum';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {MatDialog} from '@angular/material/dialog';
import {LinkDialogComponent} from '../link-dialog/link-dialog.component';

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent implements OnInit {
	@Input() public dataSource: ITask[] = [];
	@Input() public columns: ITableColumn[] = [];

	@Output() optionSelected = new EventEmitter<string>();

	public allChecked: boolean = false;
	public readonly columnType = ColumnType;
	public displayedColumns: string[] = [];
	public readonly projects: IProject[] = PROJECT_MOCK;
	public readonly status = Status;
	public readonly options = Object.values(OPTIONS_CONFIG);

	constructor(public dialog: MatDialog) {}

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

	openDialog(x: number, y: number) {
		const dialogRef = this.dialog.open(LinkDialogComponent, {
			position: {
				top: `${y + 20}px`,
				left: `${x - 330}px`,
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
