import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {TestService} from '../../services/test.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	// public readonly config: INotification[] = NOTIFICATION_CONTENT;
	@Input() pageTitle: string;
	testValue: Observable<INotification[]>;

	constructor(public notificationService: TestService) {
		this.testValue = this.notificationService.getData();
	}

	public changeTest(value: INotification[]) {
		this.notificationService.changeConfig(value);
	}
}
