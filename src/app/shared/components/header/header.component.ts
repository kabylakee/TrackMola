import {ChangeDetectionStrategy, Component} from '@angular/core';
import { NOTIFiCATION_CONTENT } from 'src/app/entities/constants/notifications.constants';
import { INotification } from 'src/app/entities/interfaces/notification.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly Config: INotification[] = NOTIFiCATION_CONTENT;
}
