import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VacationService} from 'src/app/shared/services/vacation.service';
import {takeWhile} from 'rxjs';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {IVacationFilter} from 'src/app/entities/interfaces/vacation-filter.interface';
import {IVacationTab} from 'src/app/entities/interfaces/vacation-tab.interface';
import {VACATION_TABS} from 'src/app/entities/constants/vacation-tab.constants';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {REQUEST_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {IVacationRequest} from 'src/app/entities/interfaces/request.interface';

@Component({
	selector: 'app-vacation',
	templateUrl: './vacation.component.html',
	styleUrls: ['./vacation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationComponent implements OnInit, OnDestroy {
	@Input() changeDate: Date;
	@Input() sendRequest: IVacation;

	public selectedDate: Date = new Date();
	public readonly title =
		RouterPaths.Vacation.charAt(0).toUpperCase() + RouterPaths.Vacation.slice(1);
	public isSub = true;
	public vacations: IVacation[] = [];
	public filters: IVacationFilter = {project: PROJECT_MOCK[0].title, department: 'Select all'};
	public vacationTab: IVacationTab = VACATION_TABS[1];

	// Request table
	public requests: IVacationRequest[] = [];
	public columns: ITableColumn[] = [];

	constructor(private vacationService: VacationService) {}

	public ngOnInit(): void {
		this.getMonthVacations();

		this.columns = REQUEST_TABLE_CONFIG;
	}

	public onChangeDate(event: Date): void {
		this.selectedDate = event;
		this.getMonthVacations();
	}
	public onChangeFilters(event: IVacationFilter): void {
		this.filters = event;
		this.getMonthVacations();
	}

	public onSendRequest(event: IVacation): void {
		this.vacationService.saveVacation(event);
		this.getMonthVacations();
	}

	public onChangeTab(event: IVacationTab): void {
		this.vacationTab = event;
	}

	private getMonthVacations(): void {
		this.vacationService
			.getMonthVacations(
				new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1),
				this.filters,
			)
			.pipe(takeWhile(() => this.isSub))
			.subscribe((vacations) => (this.vacations = vacations));
	}

	public ngOnDestroy(): void {
		this.isSub = false;
	}
}
