import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NOTIFICATION_CONTENT} from 'src/app/entities/constants/notifications.constants';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {Size} from 'src/app/entities/enums/size.enum';
import {Type} from 'src/app/entities/enums/type.enum';
import {INotification} from 'src/app/entities/interfaces/notification.interface';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
	public readonly size = Size;
	public readonly type = Type;
	public readonly title =
		RouterPaths.Dashboard.charAt(0).toUpperCase() + RouterPaths.Dashboard.slice(1);
	public readonly config: INotification[] = NOTIFICATION_CONTENT;
}
