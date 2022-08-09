import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, of} from 'rxjs';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {VACATION} from 'src/app/entities/constants/vacation.constant';
import {VacationRequest} from 'src/app/entities/enums/vacation-request.enum';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {IVacationRequest} from 'src/app/entities/interfaces/request.interface';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {LocalStorageService} from './localStorage.service';
import {PeriodHelper} from '../helpers/PeriodHelper.helper';
import {TaskService} from './task.service';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {Status} from 'src/app/entities/enums/status.enum';

@Injectable({providedIn: 'root'})
export class VacationService {
	public vacations$: BehaviorSubject<IVacation[]> = new BehaviorSubject<IVacation[]>([]);
	public vacationRequests$: BehaviorSubject<IVacationRequest[]> = new BehaviorSubject<
		IVacationRequest[]
	>([]);
	public isDisabledOptionBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

	public VACATIONS_DATA_KEY: string = 'VACATIONS_DATA_KEY';

	constructor(private localStorageService: LocalStorageService, private taskService: TaskService) {
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

	public getYearVacations(date: Date, employee: IEmployee): Observable<IVacation[]> {
		return this.vacations$.pipe(
			map((vacations) =>
				vacations.filter((vacation) => {
					return (
						vacation.dateFrom.getFullYear() === date.getFullYear() &&
						vacation.employee.email === employee.email
					);
				}),
			),
		);
	}

	public getVacationRequests(project: IProject): Observable<IVacationRequest[]> {
		const arr = this.vacationRequests$.value.filter((vacation) => {
			return vacation.project.title === project.title;
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
		let arr: IVacationRequest[] = [];

		this.vacations$.value
			.filter((vacation) => {
				return vacation.status === VacationRequest.Unapproved;
			})
			.forEach((vacation) => {
				vacation.employee.projects.forEach((project) => {
					const request: IVacationRequest = {
						checked: false,
						name: vacation.employee.userName,
						project: project,
						period: PeriodHelper.transformDates(vacation.dateFrom, vacation.dateTo),
						paid: vacation.paid,
						approved: false,
						notes: vacation.comments ?? '',
					};
					arr.push(request);
				});
			});

		this.vacationRequests$.next(arr);
	}

	private mapData(data: IVacation[]): void {
		data.forEach((vacation) => {
			vacation.dateFrom = new Date(vacation.dateFrom);
			vacation.dateTo = new Date(vacation.dateTo);
		});
	}

	public saveVacation(vacation: IVacation): void {
		if (vacation) {
			this.vacations$.next(this.vacations$.value.concat(vacation));
			const arr = this.vacations$.value;
			this.localStorageService.setData(this.VACATIONS_DATA_KEY, arr);

			vacation.employee.projects.forEach((project) => {
				const request: IVacationRequest = {
					checked: false,
					name: vacation.employee.userName,
					project: project,
					period: PeriodHelper.transformDates(vacation.dateFrom, vacation.dateTo),
					paid: vacation.paid,
					approved: false,
					notes: vacation.comments ?? '',
				};
				this.vacationRequests$.next(this.vacationRequests$.value.concat(request));
			});
		}
	}

	public removeVacation(data: IVacationRequest): void {
		const indexOfVacation = this.vacations$.value.findIndex((vacation) => {
			return (
				vacation.employee.userName === data.name &&
				PeriodHelper.transformDates(vacation.dateFrom, vacation.dateTo) === data.period
			);
		});
		this.vacations$.value.splice(indexOfVacation, 1);

		this.vacationRequests$.next(
			this.vacationRequests$.value.filter((vacation) => {
				return vacation.name !== data.name || vacation.period !== data.period;
			}),
		);

		this.localStorageService.setData(this.VACATIONS_DATA_KEY, this.vacations$.value);
	}

	public updateVacation(data: IVacationRequest): void {
		const indexOfVacation = this.vacations$.value.findIndex((vacation) => {
			return (
				vacation.employee.userName === data.name &&
				PeriodHelper.transformDates(vacation.dateFrom, vacation.dateTo) === data.period
			);
		});
		this.vacations$.value[indexOfVacation].status = VacationRequest.Approved;

		this.vacationRequests$.next(
			this.vacationRequests$.value.filter((vacation) => {
				return vacation.name !== data.name || vacation.period !== data.period;
			}),
		);
		this.localStorageService.setData(this.VACATIONS_DATA_KEY, this.vacations$.value);

		const tasks: ITask[] = [];
		const dateFrom = new Date(
			+(20 + data.period.split(' - ')[0].split('.')[2]),
			+data.period.split(' - ')[0].split('.')[1] - 1,
			+data.period.split(' - ')[0].split('.')[0],
		);
		const dateTo = new Date(
			+(20 + data.period.split(' - ')[0].split('.')[2]),
			+data.period.split(' - ')[1].split('.')[1] - 1,
			+data.period.split(' - ')[1].split('.')[0],
		);

		for (
			let i = dateFrom;
			i <= dateTo;
			i = new Date(i.getFullYear(), i.getMonth(), i.getDate() + 1)
		) {
			tasks.push({
				date: i,
				checked: false,
				title: 'Vacation',
				project: PROJECT_MOCK[4],
				status: Status.Done,
				time: 8,
				overtime: 0,
				paid: data.paid,
				asanaLink: '',
				bitbucketLink: '',
			});
		}

		this.taskService.saveTask(tasks);
	}

	public approveAll(data: IVacationRequest[]): void {
		data.forEach((request) => {
			this.updateVacation(request);
		});
	}

	public findVacation(vacation: IVacation): boolean {
		return this.vacations$.value.some(
			(item) =>
				item.employee.userName === vacation.employee.userName &&
				item.dateFrom.toDateString() === vacation.dateFrom.toDateString() &&
				item.dateTo.toDateString() === vacation.dateTo.toDateString() &&
				item.paid === vacation.paid,
		);
	}

	public getVacations(): Observable<IVacation[]> {
		return this.vacations$.asObservable();
	}
}
