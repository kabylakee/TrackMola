import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FINANCE_MOCKS} from 'src/app/entities/constants/finance.mock';
import {IFinance} from 'src/app/entities/interfaces/finance.interface';
import {map} from 'rxjs/operators';
import {IProject} from 'src/app/entities/interfaces/project.interface';

@Injectable({
	providedIn: 'root',
})
export class FinanceService {
	public finances$: Observable<IFinance[]>;

	constructor() {
		this.finances$ = of(FINANCE_MOCKS);
	}

	public getFinances(date: Date, project: IProject): Observable<IFinance[]> {
		return this.finances$.pipe(
			map((array) =>
				array.filter((item) => {
					if (item.employee.projects.find((data) => data.title === project.title)) return false;
					return (
						item.date.getFullYear() === date.getFullYear() &&
						item.date.getMonth() === date.getMonth()
					);
				}),
			),
		);
	}
}
