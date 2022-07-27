import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IEmployee} from '../../entities/interfaces/employee.interface';
import {EMPLOYEE_MOCK} from '../../entities/constants/employee.mock';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	public users$: Observable<IEmployee[]>;

	public getUsers(): Observable<IEmployee[]> {
		return (this.users$ = of(EMPLOYEE_MOCK));
	}
}
