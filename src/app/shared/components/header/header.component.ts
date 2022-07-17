import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {NOTIFICATION_CONTENT} from 'src/app/entities/constants/notifications.constants';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	// public readonly config: INotification[] = NOTIFICATION_CONTENT;
	@Input() pageTitle: string;
	testValue: INotification[] = NOTIFICATION_CONTENT;
	public changeTest(value: INotification[]) {
		this.testValue = value;
	}
}
