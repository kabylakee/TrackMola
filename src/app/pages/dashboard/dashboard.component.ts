import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {Size} from 'src/app/entities/enums/size.enum';
import {Type} from 'src/app/entities/enums/type.enum';
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
	public tasks: ITask[];

	constructor(private taskService: TaskService) {}

	public ngOnInit(): void {
		const today = new Date();
		this.taskService
			.getTaskFromTo(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6), today)
			.subscribe((tasks) => (this.tasks = tasks));
	}
}
