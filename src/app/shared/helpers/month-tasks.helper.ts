import { TimeStatus } from 'src/app/entities/enums/timeStatus.enum';
import { IReportsDayInfo } from 'src/app/entities/interfaces/reports-day-info.interface';
import { ITask } from 'src/app/entities/interfaces/task.interface';

export class MonthTasksHelper {
  public static taskMapper(tasks: ITask[]): void {
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

    //   return days.map(day => {
    //     return {
    //       date: day[0].date,
    //       taskCount: day.length,
    //       total: day.reduce((prev, curr) => prev += curr.time, 0),
    //       overtime: day.reduce((prev, curr) => prev += curr.overtime, 0),
    //       timeStatus: TimeStatus(day),
    //     }
    //   })
  }

  // private timeStatus(day: ITask[]): TimeStatus {

  // }
}
