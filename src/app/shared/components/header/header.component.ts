import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
// import {NOTIFICATION_CONTENT} from 'src/app/entities/constants/notifications.constants';
// import {INotification} from 'src/app/entities/interfaces/notification.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	// public readonly config: INotification[] = NOTIFICATION_CONTENT;
	@Input() pageTitle: string;
}
