import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MANAGEMENT_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {takeWhile} from 'rxjs';
import {IManagementRequest} from 'src/app/entities/interfaces/request.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ExportFormComponent} from 'src/app/shared/components/export-form/export-form.component';
import {MonthTasksHelper} from 'src/app/shared/helpers/month-tasks.helper';
import {ManagementRequestsService} from 'src/app/shared/services/management-requests.service';

@Component({
	selector: 'app-management',
	templateUrl: './management.component.html',
	styleUrls: ['./management.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent implements OnInit, OnDestroy {
	@Input() date: Date = new Date(2022, 5, 30);

	public readonly title =
		RouterPaths.Management.charAt(0).toUpperCase() + RouterPaths.Management.slice(1);

	// Management table
	public requests: IManagementRequest[] = [];
	public columns: ITableColumn[] = [];

	private isSub = true;

	private readonly weekFirstDay = MonthTasksHelper.getFirstDayOfWeek(
		MonthTasksHelper.getWeek(this.date),
		this.date,
	);

	constructor(public dialog: MatDialog, private requestsService: ManagementRequestsService) {}

	public ngOnInit(): void {
		this.columns = MANAGEMENT_TABLE_CONFIG;
		this.requestsService
			.getRequests(this.weekFirstDay)
			.pipe(takeWhile(() => this.isSub))
			.subscribe((requests) => (this.requests = requests));
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

	public ngOnDestroy(): void {
		this.isSub = false;
	}
}
