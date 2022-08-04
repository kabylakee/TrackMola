import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MANAGEMENT_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {ReportStatus} from 'src/app/entities/enums/report-status.enum';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {IManagementRequest} from 'src/app/entities/interfaces/request.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ExportFormComponent} from 'src/app/shared/components/export-form/export-form.component';

@Component({
	selector: 'app-management',
	templateUrl: './management.component.html',
	styleUrls: ['./management.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent implements OnInit {
	public readonly title =
		RouterPaths.Management.charAt(0).toUpperCase() + RouterPaths.Management.slice(1);

	// Management table
	public requests: IManagementRequest[] = [];
	public columns: ITableColumn[] = [];

	constructor(public dialog: MatDialog) {}

	public ngOnInit(): void {
		this.columns = MANAGEMENT_TABLE_CONFIG;
		this.requests = [
			{
				checked: false,
				name: 'Dilan Brooks',
				project: PROJECT_MOCK[0],
				approved: false,
				expectedHours: 1,
				paidOvertime: 0,
				totalHours: 1,
				status: ReportStatus.Approved,
			},
		];
	}

	public openExportWindow(): void {
		this.dialog.open(ExportFormComponent, {
			position: {
				top: 'calc(50vh - 7.5 * var(--offset))',
				left: 'calc(50vw - 14 * var(--offset))',
			},
			data: {},
		});
	}
}
