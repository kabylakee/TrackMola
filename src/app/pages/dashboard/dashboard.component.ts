import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {Size} from 'src/app/entities/enums/size.enum';
import {Status} from 'src/app/entities/enums/status.enum';
import {Type} from 'src/app/entities/enums/type.enum';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {NotificationService} from 'src/app/shared/services/notification.service';
import {Observable} from 'rxjs';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from 'src/app/shared/services/task.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
	public readonly size = Size;
	public readonly type = Type;
	public readonly title =
		RouterPaths.Dashboard.charAt(0).toUpperCase() + RouterPaths.Dashboard.slice(1);
	public config: Observable<INotification[]>;

	constructor(private taskService: TaskService, public notificationService: NotificationService) {
		this.config = notificationService.getData();
	}

	public changeListOfNotifications(value: INotification[]): void {
		this.notificationService.changeConfig(value);
	}
	public tasks: ITask[];
	public progressTasks: ITask[];

	public ngOnInit(): void {
		const today = new Date();
		this.taskService
			.getTaskFromTo(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6), today)
			.subscribe((tasks) => (this.tasks = tasks));

		this.taskService
			.getTaskFromTo(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 20), today)
			.subscribe(
				(t) =>
					(this.progressTasks = t.filter((task) => {
						return task.status === Status.InProgress;
					})),
			);
	}
}
