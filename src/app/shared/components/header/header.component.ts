import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {NotificationService} from '../../services/notification.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input() pageTitle: string;
	public listOfNotifications: Observable<INotification[]>;

	constructor(public notificationService: NotificationService) {
		this.listOfNotifications = this.notificationService.getData();
	}

	public changeListOfNotifications(value: INotification[]): void {
		this.notificationService.changeConfig(value);
	}
}
