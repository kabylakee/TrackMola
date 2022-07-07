import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TimeStatus } from 'src/app/entities/enums/timeStatus.enum';
import { IReportsDayInfo } from 'src/app/entities/interfaces/reports-day-info.interface';
import { ITask } from 'src/app/entities/interfaces/task.interface';
import { MonthTasksHelper } from '../../helpers/month-tasks.helper';
import { TaskService } from '../../services/task.service';

@Component({
	selector: 'app-month-table',
	templateUrl: './month-table.component.html',
	styleUrls: ['./month-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthTableComponent implements OnInit {
	@Input() readonly selectedDate: Date = new Date(2022, 6, 1);

	public defaultDayInfo: IReportsDayInfo = {
		date: new Date(),
		taskCount: 0,
		total: 0,
		overtime: 0,
		timeStatus: TimeStatus.Enough,
		isVacation: false,
		paid: false,
		disabled: false,
	};
	public tasks: ITask[];

	public allDaysInfo: IReportsDayInfo[] = [];

	constructor(private taskService: TaskService) { }

	ngOnInit(): void {
		this.taskService
			.getTasks(
				this.selectedDate,
				new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 1),
			)
			.subscribe((tasks) => (this.tasks = tasks));

		const daysInfo = MonthTasksHelper.taskMapper(this.tasks);
		console.log(daysInfo);

		this.makeCalendar(daysInfo);
	}

	makeCalendar(daysInfo: IReportsDayInfo[]): void {
		const currentDay = new Date().getDate();
		const currentMonth = new Date().getMonth();
		const currentYear = new Date().getFullYear();

		const selectedMonth = this.selectedDate.getMonth();
		const selectedYear = this.selectedDate.getFullYear();

		const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
		const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
		const daysInMonth = lastDayOfMonth.getDate();

		const paddingDaysStart = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
		const paddingDaysEnd = lastDayOfMonth.getDay() === 0 ? 0 : 7 - lastDayOfMonth.getDay();

		for (let i = 1; i <= paddingDaysStart + daysInMonth; i++) {
			this.allDaysInfo.push({ ...this.defaultDayInfo });
			this.allDaysInfo[i - 1].date = new Date(selectedYear, selectedMonth, i - paddingDaysStart);

			if (
				i - paddingDaysStart < currentDay &&
				selectedMonth === currentMonth &&
				selectedYear === currentYear
			) {
				this.allDaysInfo[i - 1].timeStatus = TimeStatus.Unfinished;
			}

			daysInfo.forEach((dayInfo) => {
				if (+dayInfo.date === +this.allDaysInfo[i - 1].date) this.allDaysInfo[i - 1] = dayInfo;
			});

			if (
				i <= paddingDaysStart ||
				this.allDaysInfo[i - 1].date.getDay() === 6 ||
				this.allDaysInfo[i - 1].date.getDay() === 0
			) {
				this.allDaysInfo[i - 1].disabled = true;
			}
		}

		for (
			let i = paddingDaysStart + daysInMonth;
			i < paddingDaysStart + daysInMonth + paddingDaysEnd;
			i++
		) {
			this.allDaysInfo.push({ ...this.defaultDayInfo });
			this.allDaysInfo[i].date = new Date(selectedYear, selectedMonth + 1, i);
			this.allDaysInfo[i].disabled = true;
		}
	}
}
