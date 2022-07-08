import { TimeStatus } from 'src/app/entities/enums/timeStatus.enum';
import { IReportsDayInfo } from 'src/app/entities/interfaces/reports-day-info.interface';
import { IReportsWeekInfo } from 'src/app/entities/interfaces/reports-week-info.interface';
import { ITask } from 'src/app/entities/interfaces/task.interface';

export class MonthTasksHelper {
	public static taskToDayMapper(tasks: ITask[]): IReportsDayInfo[] {
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
		}));
	}


	public static dayToWeekMapper(allDayInfo: IReportsDayInfo[]): IReportsWeekInfo[] {
		let weeks: IReportsDayInfo[][] = [];
		let weekInfo: IReportsDayInfo[] = [];
		let currentWeek = this.getWeek(allDayInfo[0].date);

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
		weeks.push(weekInfo);

		const allWeekInfo: IReportsWeekInfo[] = [];

		weeks.forEach((week, weekIndex) => {
			allWeekInfo.push({
				weekNumber: weekIndex + 1,
				taskCount: week.length,
				total: week.reduce((totalTime, day) => (totalTime += day.total), 0),
				overtime: week.reduce((totalOvertime, day) => (totalOvertime += day.overtime), 0),
			})
		});

		return allWeekInfo;
	}


	private static timeStatus(day: ITask[]): TimeStatus {
		const totalTime = day.reduce((total, task) => (total += task.time), 0);

		if (totalTime < 8) return TimeStatus.Unfinished;
		if (totalTime > 8) return TimeStatus.Overwork;
		return TimeStatus.Enough;
	}


	private static getWeek(date: Date): number {
		const dateNumber = date.getDate();
		const dayNumber = date.getDay() === 0 ? 7 : date.getDay();
		return Math.ceil((dateNumber - dayNumber) / 7) + 1;
	}
}
