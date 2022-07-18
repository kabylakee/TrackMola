import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NOTIFICATION_CONTENT} from 'src/app/entities/constants/notifications.constants';
import {INotification} from 'src/app/entities/interfaces/notification.interface';

@Component({
	selector: 'app-bell',
	templateUrl: './bell.component.html',
	styleUrls: ['./bell.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BellComponent {
	@Input() bellTest: INotification[] = NOTIFICATION_CONTENT;
	public readonly config: INotification[] = NOTIFICATION_CONTENT;
	public isCardOpen = false;

	public showCard(): void {
		this.isCardOpen = !this.isCardOpen;
	}
}
