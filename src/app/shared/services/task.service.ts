import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {OVERTIME} from 'src/app/entities/constants/overtime.constants';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {STATUSES} from 'src/app/entities/constants/status.constants';
import {TASKS_MOCK} from 'src/app/entities/constants/tasks.mock';
import {IFilter} from 'src/app/entities/interfaces/filter.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {LocalStorageService} from './localStorage.service';
import {IOptionInterface} from '../../entities/interfaces/option.interface';
import {OptionsTitle} from '../../entities/enums/options.enum';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	public tasks$: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([]);
	public isDisabledOptionBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
	public readonly REPORTS_DATA_KEY: string = 'REPORTS_DATA_KEY';

	constructor(private localStorageService: LocalStorageService) {
		this.checkData();
	}

	public filterTasks(
		filter: IFilter = {
			projects: [],
			statuses: [],
			overtimes: [],
		},
	): Observable<ITask[]> {
		if (!filter.projects.length) {
			filter.projects = Object.values(PROJECT_MOCK);
		}
		if (!filter.statuses.length) {
			filter.statuses = Object.values(STATUSES);
		}
		if (!filter.overtimes.length) {
			filter.overtimes = Object.values(OVERTIME);
		}

		const arr = this.tasks$.value.filter((task) => {
			return (
				filter.projects.find((project) => task.project.title === project.title) &&
				filter.statuses.find((status) => task.status === status.title) &&
				filter.overtimes.find(
					(overtime) =>
						(task.paid && overtime.title === 'Paid' && task.overtime) ||
						(!task.paid && overtime.title === 'Unpaid' && task.overtime) ||
						(!task.overtime && overtime.title === 'No overtime' && !task.paid),
				)
			);
		});
		return of(arr);
	}

	public getTasks(): Observable<ITask[]> {
		return this.tasks$.pipe();
	}

	public getMonthTasks(
		dateFrom: Date = new Date(0),
		dateTo: Date = new Date(),
		filter: IFilter = {
			projects: [],
			statuses: [],
			overtimes: [],
		},
	): Observable<ITask[]> {
		if (!filter.projects.length) {
			filter.projects = Object.values(PROJECT_MOCK);
		}
		if (!filter.statuses.length) {
			filter.statuses = Object.values(STATUSES);
		}
		if (!filter.overtimes.length) {
			filter.overtimes = Object.values(OVERTIME);
		}

		const arr = this.tasks$.value.filter(
			(task) =>
				task.date >= dateFrom &&
				task.date < dateTo &&
				filter.projects.find((project) => task.project.title === project.title) &&
				filter.statuses.find((status) => task.status === status.title) &&
				filter.overtimes.find(
					(overtime) =>
						(task.paid && overtime.title === 'Paid' && task.overtime) ||
						(!task.paid && overtime.title === 'Unpaid' && task.overtime) ||
						(!task.overtime && overtime.title === 'No overtime' && !task.paid),
				),
		);
		return of(arr);
	}

	public checkData(): void {
		const localStorageData = this.localStorageService.getData(this.REPORTS_DATA_KEY);
		if (!localStorageData) {
			this.localStorageService.setData(this.REPORTS_DATA_KEY, TASKS_MOCK);
			this.tasks$.next(TASKS_MOCK);
		} else {
			this.mapData(localStorageData as ITask[]);
			this.tasks$.next(localStorageData as ITask[]);
		}
	}

	public getDisabledOptionBtn(): Observable<boolean> {
		return this.isDisabledOptionBtn.pipe();
	}

	public setDisabledOptionBtn(isDisabled: boolean): void {
		this.isDisabledOptionBtn.next(isDisabled);
	}

	private mapData(data: ITask[]): void {
		data.forEach((task) => {
			task.date = new Date(task.date);
		});
	}

	public ChangeActionBtn(newAction: IOptionInterface, actionData: ITask[]): void {
		if (newAction.action === OptionsTitle.Copy) {
			const newArr = actionData.map((task) => {
				return {...task, date: newAction.date, checked: false};
			});
			this.tasks$.next(this.tasks$.value.concat(newArr));
		}
		if (newAction.action === OptionsTitle.Remove) {
			let newData = [...this.tasks$.value];
			actionData.forEach((actionTask) => {
				const findedIndex = newData.findIndex((task) => {
					return JSON.stringify(task) === JSON.stringify(actionTask);
				});
				newData.splice(findedIndex, 1);
			});
			this.tasks$.next(newData);
		}
		if (newAction.action === OptionsTitle.Move) {
			let newData = [...this.tasks$.value];
			newData.forEach((task) => {
				actionData.forEach((actionTask) => {
					if (JSON.stringify(task) === JSON.stringify(actionTask)) {
						task.date = newAction.date;
						task.checked = false;
					}
				});
			});
			this.tasks$.next(newData);
		}
	}
}
