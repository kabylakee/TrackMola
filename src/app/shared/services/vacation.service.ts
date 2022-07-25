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

	constructor(private localStorageService: LocalStorageService) {}

	public getMonthVacations(
		dateFrom: Date = new Date(0),
		dateTo: Date = new Date(),
		filter = {
			project: PROJECT_MOCK[0].title,
			department: 'Select all',
		},
	): Observable<IVacation[]> {
		const arr = VACATION.filter((vacation) => {
			return (
				vacation.dateFrom >= dateFrom &&
				vacation.dateTo < dateTo &&
				(vacation.employee.department === filter.department ||
					filter.department === 'Select all') &&
				vacation.employee.projects.find((project) => project.title === filter.project)
			);
		});
		return of(arr);
	}
}
}
