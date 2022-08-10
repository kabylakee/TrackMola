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
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {Period} from 'src/app/entities/enums/period.enum';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {VacationRequest} from 'src/app/entities/enums/vacation-request.enum';

@Component({
	selector: 'app-vacation',
	templateUrl: './vacation.component.html',
	styleUrls: ['./vacation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationComponent implements OnInit, OnDestroy {
	@Input() changeDate: Date;
	@Input() sendRequest: IVacation;

	get periodRange(): Period {
		return this.vacationTab.title === 'Personal' ? Period.Year : Period.Month;
	}
	public currentUser: IEmployee = EMPLOYEE_MOCK[0];
	public selectedDate: Date = new Date();
	public readonly title =
		RouterPaths.Vacation.charAt(0).toUpperCase() + RouterPaths.Vacation.slice(1);
	public isSub = true;
	public vacations: IVacation[] = [];
	public filters: IVacationFilter = {project: PROJECT_MOCK[0].title, department: 'Select all'};
	public vacationTab: IVacationTab = VACATION_TABS[1];
	public selectedProject: IProject = PROJECT_MOCK[0];
	// Request table
	public vacationRequests: IVacationRequest[];
	private requests: IVacationRequest[] = [];
	public columns: ITableColumn[] = [];
	public daysSelected: number;

	constructor(private vacationService: VacationService) {}

	public ngOnInit(): void {
		this.getMonthVacations();
		this.getVacationRequests();
		this.columns = REQUEST_TABLE_CONFIG;
		this.daysSelected = this.vacations.reduce(function (sum, current) {
			if (
				current.employee.id === 1 &&
				current.status === VacationRequest.Approved &&
				current.paid
			) {
				return sum + (current.dateTo.getTime() - current.dateFrom.getTime()) / (1000 * 3600 * 24);
			}
			return sum;
		}, 0);
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
		if (event && !this.vacationService.findVacation(event)) {
			this.vacationService.saveVacation(event);
			this.getMonthVacations();
			this.getVacationRequests();
		}
	}

	public onChangeTab(event: IVacationTab): void {
		this.vacationTab = event;
	}

	public onChangeProject(event: IProject): void {
		this.selectedProject = event;
		if (this.vacationTab === VACATION_TABS[2]) {
			this.columns = REQUEST_TABLE_CONFIG;
			this.getVacationRequests();
		}
	}

	public onChangeInput(value: string): void {
		if (value === '') {
			this.vacationRequests = this.requests;
			return;
		}
		this.vacationRequests = this.requests.filter((vacation) => {
			return Boolean(vacation.name.toLowerCase().includes(value.toLocaleLowerCase()));
		});
	}

	public onStatusChanged(): void {
		this.getMonthVacations();
		this.getVacationRequests();
		this.daysSelected = this.vacations.reduce(function (sum, current) {
			if (
				current.employee.id === 1 &&
				current.status === VacationRequest.Approved &&
				current.paid
			) {
				return sum + (current.dateTo.getTime() - current.dateFrom.getTime()) / (1000 * 3600 * 24);
			}
			return sum;
		}, 0);
	}

	public approveAllSelected(): void {
		this.vacationService.approveAll(this.vacationRequests.filter((request) => request.checked));
		this.getMonthVacations();
		this.getVacationRequests();
		this.daysSelected = this.vacations.reduce(function (sum, current) {
			if (
				current.employee.id === 1 &&
				current.status === VacationRequest.Approved &&
				current.paid
			) {
				return sum + (current.dateTo.getTime() - current.dateFrom.getTime()) / (1000 * 3600 * 24);
			}
			return sum;
		}, 0);
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

	private getVacationRequests(): void {
		this.vacationService
			.getVacationRequests(this.selectedProject)
			.pipe(takeWhile(() => this.isSub))
			.subscribe((vacations) => (this.requests = this.vacationRequests = vacations));
	}

	public ngOnDestroy(): void {
		this.isSub = false;
	}
}
