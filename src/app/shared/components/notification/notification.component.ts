import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {TestService} from '../../services/test.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [TestService],
})
export class NotificationComponent implements OnInit, OnChanges {
	@Input() notifications: INotification[] = [];
	@Output() snoozedNotification = new EventEmitter<INotification[]>();
	@Output() test = new EventEmitter<INotification[]>();
	public copyOfNotifications: INotification[];
	public currentOfNotifications: INotification[];
	public hour = 5000;
	constructor(private _cdr: ChangeDetectorRef, public dataService: TestService) {
		// this.copyOfNotifications = this.notifications;
	}

	public ngOnInit(): void {
		// console.log(this.copyOfNotifications);
		this.copyOfNotifications = this.notifications;
		// this.dataService.getData().subscribe((config) => (this.copyOfNotifications = config));
		// this.dataService.config$.subscribe((config) => (this.copyOfNotifications = config));
	}

	public ngOnChanges(): void {
		// console.log(this.copyOfNotifications);
		this.copyOfNotifications = this.currentOfNotifications;
		this.dataService.getData().subscribe((config) => (this.copyOfNotifications = config));
		this.dataService.config$.subscribe((config) => (this.copyOfNotifications = config));
	}

	public snoozeNotification(i: number): void {
		const notification = this.copyOfNotifications.splice(i, 1);
		setTimeout(() => {
			this.copyOfNotifications.unshift(notification[0]);
			// this.dataService.changeConfig(this.copyOfNotifications);
			this._cdr.detectChanges();
		}, this.hour);
		this.test.emit(this.copyOfNotifications);
	}

	public dismissNotification(i: number): void {
		this.copyOfNotifications.splice(i, 1);
	}

	public dismissNotificationAll(): void {
		this.copyOfNotifications.length = 0;
	}

	public snoozeNotificationAll(): void {
		const notifications = this.copyOfNotifications;
		this.copyOfNotifications = [];
		setTimeout(() => {
			this.copyOfNotifications = notifications;
			this.notifications = this.copyOfNotifications;
			this._cdr.detectChanges();
		}, this.hour);
		this.notifications = this.copyOfNotifications;
	}
}
