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
		this.test.emit(this.notifications?.filter((notification, index) => index !== i));
	}

	public dismissNotification(i: number): void {
		this.test.emit(this.notifications?.filter((notification, index) => index !== i));
	}

	public dismissNotificationAll(): void {
		this.test.emit([]);
	}

	public snoozeNotificationAll(): void {
		this.test.emit([]);
	}
}
