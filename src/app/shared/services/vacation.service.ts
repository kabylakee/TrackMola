import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {VACATION} from 'src/app/entities/constants/vacation.constant';
import {VacationRequest} from 'src/app/entities/enums/vacation-request.enum';
import {IVacationRequest} from 'src/app/entities/interfaces/request.interface';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {LocalStorageService} from './localStorage.service';

@Injectable({providedIn: 'root'})
export class VacationService {
	public vacations$: BehaviorSubject<IVacation[]> = new BehaviorSubject<IVacation[]>([]);
	public isDisabledOptionBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

	public VACATIONS_DATA_KEY: string = 'VACATIONS_DATA_KEY';

	constructor(private localStorageService: LocalStorageService) {
		this.checkData();
	}

	public getMonthVacations(
		dateFrom: Date = new Date(0),
		filter = {
			project: PROJECT_MOCK[0].title,
			department: 'Select all',
		},
	): Observable<IVacation[]> {
		const arr = this.vacations$.value.filter((vacation) => {
			return (
				((vacation.dateFrom.getFullYear() === dateFrom.getFullYear() &&
					vacation.dateFrom.getMonth() === dateFrom.getMonth()) ||
					(vacation.dateFrom.getFullYear() === dateFrom.getFullYear() &&
						vacation.dateFrom.getMonth() === dateFrom.getMonth() - 1) ||
					(vacation.dateFrom.getFullYear() === dateFrom.getFullYear() &&
						vacation.dateFrom.getMonth() === dateFrom.getMonth() + 1)) &&
				(vacation.employee.department === filter.department ||
					filter.department === 'Select all') &&
				vacation.employee.projects.find((project) => project.title === filter.project)
			);
		});
		return of(arr);
	}

	public getVacationRequests(): Observable<IVacation[]> {
		const arr = this.vacations$.value.filter((vacation) => {
			return vacation.status === VacationRequest.Unapproved;
		});
		return of(arr);
	}

	public checkData(): void {
		const localStorageData = this.localStorageService.getData(this.VACATIONS_DATA_KEY);
		if (!localStorageData) {
			this.localStorageService.setData(this.VACATIONS_DATA_KEY, VACATION);
			this.vacations$.next(VACATION);
		} else {
			this.mapData(localStorageData as IVacation[]);
			this.vacations$.next(localStorageData as IVacation[]);
		}
	}

	private mapData(data: IVacation[]): void {
		data.forEach((vacation) => {
			vacation.dateFrom = new Date(vacation.dateFrom);
			vacation.dateTo = new Date(vacation.dateTo);
		});
	}

	public saveVacation(data: IVacation): void {
		if (data) {
			this.vacations$.next(this.vacations$.value.concat(data));
			const arr = this.vacations$.value;
			this.localStorageService.setData(this.VACATIONS_DATA_KEY, arr);
		}
	}

	public removeVacation(data: IVacationRequest): void {
		const indexOfVacation = this.vacations$.value.findIndex((vacation) => {
			return (
				vacation.employee.userName === data.name &&
				vacation.dateFrom.getDate() +
					'.' +
					vacation.dateFrom.getMonth() +
					' - ' +
					vacation.dateTo ===
					data.period
			);
		});

		this.vacations$.value.splice(indexOfVacation, 1);
	}
}
