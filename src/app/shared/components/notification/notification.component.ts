import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {TestService} from '../../services/test.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
	@Input() notifications: INotification[] | null = [];
	@Output() snoozedNotification = new EventEmitter<INotification[]>();
	@Output() test = new EventEmitter<INotification[]>();
	public hour = 5000;
	constructor(private _cdr: ChangeDetectorRef, public dataService: TestService) {}

	public snoozeNotification(i: number): void {
		this.test.emit(
			this.notifications?.filter((notification, index) => {
				if (index === i) {
					setTimeout(() => {
						this.notifications?.push(notification);
						this.test.emit(this.notifications?.filter(() => true));
					}, this.hour);
				}
				return index !== i;
			}),
		);
	}

	public dismissNotification(i: number): void {
		this.test.emit(this.notifications?.filter((notification, index) => index !== i));
	}

	public dismissNotificationAll(): void {
		this.test.emit([]);
	}

	public snoozeNotificationAll(): void {
		let test = this.notifications?.filter(() => true);
		this.test.emit([]);
		setTimeout(() => {
			this.test.emit(test);
		}, this.hour);
	}
}
