import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {NOTIFICATION_CONTENT} from 'src/app/entities/constants/notifications.constants';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {NotificationService} from '../../services/notification.service';

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
	@Input() notifications: INotification[] | null = [];

	listOfNotifications: Observable<INotification[]>;

	constructor(public notificationService: NotificationService) {
		this.listOfNotifications = this.notificationService.getData();
	}
	public showCard(): void {
		this.isCardOpen = !this.isCardOpen;
	}
}
