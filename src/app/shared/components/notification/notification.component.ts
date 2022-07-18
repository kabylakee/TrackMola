import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
	@Input() notifications: INotification[] | null = [];
	@Output() eventChangeNotification = new EventEmitter<INotification[]>();
	public hour = 1000 * 3600;

	public snoozeNotification(i: number): void {
		this.eventChangeNotification.emit(
			this.notifications?.filter((notification, index) => {
				if (index === i) {
					setTimeout(() => {
						this.notifications?.push(notification);
						this.eventChangeNotification.emit(this.notifications?.filter(() => true));
					}, this.hour);
				}
				return index !== i;
			}),
		);
	}

	public dismissNotification(i: number): void {
		this.eventChangeNotification.emit(
			this.notifications?.filter((notification, index) => index !== i),
		);
	}

	public dismissNotificationAll(): void {
		this.eventChangeNotification.emit([]);
	}

	public snoozeNotificationAll(): void {
		const modifyNotifications = this.notifications?.filter(() => true);
		this.eventChangeNotification.emit([]);
		setTimeout(() => {
			this.eventChangeNotification.emit(modifyNotifications);
		}, this.hour);
	}
}
