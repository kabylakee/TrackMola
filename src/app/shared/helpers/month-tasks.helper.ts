import {TimeStatus} from 'src/app/entities/enums/timeStatus.enum';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';

export class MonthTasksHelper {
	public static getCalendarConfig(monthTasks: ITask[], selectedDate: Date): IReportsDayInfo[] {
		const daysInfo = MonthTasksHelper.taskToDayMapper(monthTasks);
		const allDaysInfo = MonthTasksHelper.getAllDayInfo(daysInfo, selectedDate);
		const allWeeksInfo = MonthTasksHelper.dayToWeekMapper(daysInfo, selectedDate);

		const calendarConfig: IReportsDayInfo[] = [];
		let weekCounter = 0;
		let dayCounter = 0;

		for (let i = 0; i < allDaysInfo.length + allWeeksInfo.length; i++) {
			if (i % 8 === 0) {
				calendarConfig.push(allWeeksInfo[weekCounter]);
				weekCounter++;
			} else {
				calendarConfig.push(allDaysInfo[dayCounter]);
				dayCounter++;
			}
		}

		return calendarConfig;
	}

	private static taskToDayMapper(tasks: ITask[]): IReportsDayInfo[] {
		if (tasks.length === 0) return [];
		let days: ITask[][] = []; // array of day tasks arrays
		let dayTasks: ITask[] = []; // one day tasks
		let currentDate = tasks[0].date;

		tasks.forEach((task) => {
			if (+task.date === +currentDate) {
				dayTasks.push(task);
			} else {
				days.push(dayTasks);
				dayTasks = [];
				currentDate = task.date;
				dayTasks.push(task);
			}
		});
		days.push(dayTasks); // last day

		return days.map((day) => ({
			date: day[0].date,
			taskCount: day.length,
			total: day.reduce((totalTime, task) => (totalTime += task.time), 0),
			overtime: day.reduce((totalOvertime, task) => (totalOvertime += task.overtime), 0),
			timeStatus: this.timeStatus(day),
			isVacation: day[0].project.title === 'Vacation' ? true : false,
			paid: day[0].paid,
			disabled: false,
			isWeekInfo: false,
		}));
	}

	private static getAllDayInfo(daysInfo: IReportsDayInfo[], date: Date): IReportsDayInfo[] {
		const allDaysInfo: IReportsDayInfo[] = [];
		const defaultDayInfo = {
			date: new Date(),
			taskCount: 0,
			total: 0,
			overtime: 0,
			timeStatus: TimeStatus.Enough,
			isVacation: false,
			paid: false,
			disabled: false,
			isWeekInfo: false,
		};
		const selectedMonth = date.getMonth();
		const selectedYear = date.getFullYear();
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
		const currentDay = new Date().getDate();
		const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
		const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
		const daysInMonth = lastDayOfMonth.getDate();
		const paddingDaysStart = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1; // day count from last month
		const paddingDaysEnd = lastDayOfMonth.getDay() === 0 ? 0 : 7 - lastDayOfMonth.getDay(); // day count from next month

		for (let i = 0; i < paddingDaysStart; i++) {
			allDaysInfo.push({...defaultDayInfo});
			allDaysInfo[i].date = new Date(selectedYear, selectedMonth, i - paddingDaysStart + 1); // add correct day of previous month
			allDaysInfo[i].disabled = true;
		}

		for (let i = paddingDaysStart; i < paddingDaysStart + daysInMonth; i++) {
			allDaysInfo.push({...defaultDayInfo});
			allDaysInfo[i].date = new Date(selectedYear, selectedMonth, i - paddingDaysStart + 1); // add correct day of month

			if (
				i - paddingDaysStart + 1 < currentDay &&
				selectedMonth === currentMonth &&
				selectedYear === currentYear
			) {
				allDaysInfo[i].timeStatus = TimeStatus.Unfinished; // mark missed days
			}

			daysInfo.forEach((dayInfo) => {
				if (+dayInfo.date === +allDaysInfo[i].date) allDaysInfo[i] = dayInfo; // add saved information about day
			});

			if (allDaysInfo[i].date.getDay() === 6 || allDaysInfo[i].date.getDay() === 0) {
				allDaysInfo[i].disabled = true; // disable weekends
			}
		}

		for (
			let i = paddingDaysStart + daysInMonth;
			i < paddingDaysStart + daysInMonth + paddingDaysEnd;
			i++
		) {
			allDaysInfo.push({...defaultDayInfo});
			allDaysInfo[i].date = new Date(
				selectedYear,
				selectedMonth + 1,
				i - paddingDaysStart - daysInMonth + 1,
			);
			allDaysInfo[i].disabled = true;
		}

		return allDaysInfo;
	}

	private static dayToWeekMapper(allDayInfo: IReportsDayInfo[], date: Date): IReportsDayInfo[] {
		let weeks: IReportsDayInfo[][] = [];
		let weekInfo: IReportsDayInfo[] = [];
		let currentWeek = this.getWeek(new Date(date.getFullYear(), date.getMonth(), 1));

		const lastWeek = this.getWeek(new Date(date.getFullYear(), date.getMonth() + 1, 0));
		const allWeeksInfo: IReportsDayInfo[] = [];

		allDayInfo.forEach((dayInfo) => {
			if (this.getWeek(dayInfo.date) === currentWeek) {
				weekInfo.push(dayInfo);
			} else {
				weeks.push(weekInfo);
				weekInfo = [];
				currentWeek = this.getWeek(dayInfo.date);
				weekInfo.push(dayInfo);
			}
		});

		if (weeks.length) {
			weeks.push(weekInfo);

			weeks.forEach((week) => {
				allWeeksInfo.push({
					date: week[0].date,
					taskCount: week.length,
					total: week.reduce((totalTime, day) => (totalTime += day.total), 0),
					overtime: week.reduce((totalOvertime, day) => (totalOvertime += day.overtime), 0),
					timeStatus: this.weekStatus(week),
					isVacation: false,
					paid: false,
					disabled: false,
					isWeekInfo: true,
				});
			});
		}

		const msPerWeek = 6.048e8;
		for (let i = allWeeksInfo.length; i < lastWeek; i++) {
			allWeeksInfo.push({
				date: allWeeksInfo.length
					? new Date(+allWeeksInfo[i - 1].date + msPerWeek)
					: new Date(date.getFullYear(), date.getMonth(), 1),
				taskCount: 0,
				total: 0,
				overtime: 0,
				timeStatus: TimeStatus.Enough,
				isVacation: false,
				paid: false,
				disabled: false,
				isWeekInfo: true,
			});
		}

		return allWeeksInfo;
	}

	private static timeStatus(day: ITask[]): TimeStatus {
		const totalTime = day.reduce((total, task) => (total += task.time), 0);

		if (totalTime < 8) return TimeStatus.Unfinished;
		if (totalTime > 8) return TimeStatus.Overwork;
		return TimeStatus.Enough;
	}

	private static weekStatus(week: IReportsDayInfo[]): TimeStatus {
		const totalTime = week.reduce((total, day) => (total += day.total), 0);

		if (totalTime < 40) return TimeStatus.Unfinished;
		if (totalTime > 40) return TimeStatus.Overwork;
		return TimeStatus.Enough;
	}

	private static getWeek(date: Date): number {
		const dateNumber = date.getDate();
		const dayNumber = date.getDay() === 0 ? 7 : date.getDay();
		return Math.ceil((dateNumber - dayNumber) / 7) + 1;
	}
}
