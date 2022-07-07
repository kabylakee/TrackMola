import { TimeStatus } from 'src/app/entities/enums/timeStatus.enum';
import { IReportsDayInfo } from 'src/app/entities/interfaces/reports-day-info.interface';
import { ITask } from 'src/app/entities/interfaces/task.interface';

export class MonthTasksHelper {
	public static taskMapper(tasks: ITask[]): IReportsDayInfo[] {
		if (tasks.length === 0) return [];
		let days: ITask[][] = [];
		let dayTasks: ITask[] = [];
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

		days.push(dayTasks);

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

	private static timeStatus(day: ITask[]): TimeStatus {
		const totalTime = day.reduce((total, task) => (total += task.time), 0);

		if (totalTime < 8) return TimeStatus.Unfinished;
		if (totalTime > 8) return TimeStatus.Overwork;
		return TimeStatus.Enough;
	}
}
