import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Component({
	selector: 'app-progress-tasks',
	templateUrl: './progress-tasks.component.html',
	styleUrls: ['./progress-tasks.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressTasksComponent {
	@Input() tasks: ITask[] = [];
}
