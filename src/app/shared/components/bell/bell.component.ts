import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';

@Component({
	selector: 'app-bell',
	templateUrl: './bell.component.html',
	styleUrls: ['./bell.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BellComponent implements OnInit {
	@Input() notifications: INotification[] = [];
	@Output() snoozedNotification = new EventEmitter<INotification[]>();
	public isCardOpen = false;
	public copyOfNotifications: INotification[];
	constructor(private _cdr: ChangeDetectorRef) {}

	public ngOnInit(): void {
		this.copyOfNotifications = this.notifications;
	}

	showCard() {
		console.log(this.copyOfNotifications);
		console.log(this.notifications);
		if (!this.isCardOpen) {
			this.isCardOpen = true;
		} else {
			this.isCardOpen = false;
		}
	}

	snoozeNotification(i: number) {
		const notification = this.copyOfNotifications.splice(i, 1);
		setTimeout(() => {
			this.copyOfNotifications.unshift(notification[0]);
			this._cdr.detectChanges();
		}, 1000 * 3600);
	}

	dismissNotification(i: number) {
		this.copyOfNotifications.splice(i, 1);
	}

	dismissNotificationAll() {
		this.copyOfNotifications = [];
	}

	snoozeNotificationAll() {
		const notifications = this.copyOfNotifications;
		this.copyOfNotifications = [];
		setTimeout(() => {
			this.copyOfNotifications = notifications;
			this._cdr.detectChanges();
		}, 1000 * 3600);
	}
}
