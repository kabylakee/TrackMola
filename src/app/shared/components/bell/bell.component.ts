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
	public hour = 1000 * 3600;
	constructor(private _cdr: ChangeDetectorRef) {}

	public ngOnInit(): void {
		this.copyOfNotifications = this.notifications;
	}

	public showCard(): void {
		this.isCardOpen = !this.isCardOpen;
	}

	public snoozeNotification(i: number): void {
		const notification = this.copyOfNotifications.splice(i, 1);
		setTimeout(() => {
			this.copyOfNotifications.unshift(notification[0]);
			this._cdr.detectChanges();
		}, this.hour);
	}

	public dismissNotification(i: number): void {
		this.copyOfNotifications.splice(i, 1);
	}

	public dismissNotificationAll(): void {
		this.copyOfNotifications = [];
	}

	public snoozeNotificationAll(): void {
		const notifications = this.copyOfNotifications;
		this.copyOfNotifications = [];
		setTimeout(() => {
			this.copyOfNotifications = notifications;
			this._cdr.detectChanges();
		}, this.hour);
	}
}
