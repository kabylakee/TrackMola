import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IEmployee} from '../../entities/interfaces/employee.interface';
import {EMPLOYEE_MOCK} from '../../entities/constants/employee.mock';
import {LocalStorageService} from './localStorage.service';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	public users$: BehaviorSubject<IEmployee[]> = new BehaviorSubject<IEmployee[]>([]);
	public readonly USERS_DATA_KEY: string = 'USERS_DATA_KEY';

	constructor(private localStorageService: LocalStorageService) {
		this.checkData();
	}

	public getUsers(): Observable<IEmployee[]> {
		return this.users$.pipe();
	}

	public checkData(): void {
		const localStorageData = this.localStorageService.getData(this.USERS_DATA_KEY);
		if (!localStorageData) {
			this.localStorageService.setData(this.USERS_DATA_KEY, EMPLOYEE_MOCK);
			this.users$.next(EMPLOYEE_MOCK);
		} else {
			this.users$.next(localStorageData as IEmployee[]);
		}
	}

	public saveState(userData: IEmployee[]): void {
		userData.forEach((user) => (user.isNew = false));
		this.users$.next(this.users$.value.concat(userData));
		this.localStorageService.setData(this.USERS_DATA_KEY, this.users$.value);
	}
}
