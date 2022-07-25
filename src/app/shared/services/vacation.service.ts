import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {VACATION} from 'src/app/entities/constants/vacation.constant';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {LocalStorageService} from './localStorage.service';

@Injectable({providedIn: 'root'})
export class VacationService {
	public vacations: Observable<IVacation[]>;
	public vacations$: BehaviorSubject<IVacation[]> = new BehaviorSubject<IVacation[]>([]);
	public isDisabledOptionBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

	public VACATIONS_DATA_KEY: string = 'VACATIONS_DATA_KEY';

	constructor(private localStorageService: LocalStorageService) {
		this.checkData();
	}

	public getMonthVacations(
		dateFrom: Date = new Date(0),
		//dateTo: Date = new Date(),
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

	public saveVacation(data: IVacation) {
		this.vacations$.next(this.vacations$.value.concat(data));
	}
}
