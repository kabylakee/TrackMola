import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {Size} from 'src/app/entities/enums/size.enum';
import {Type} from 'src/app/entities/enums/type.enum';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {TestService} from 'src/app/shared/services/test.service';
import {Observable} from 'rxjs';

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
	public config: Observable<INotification[]>;

	constructor(private _cdr: ChangeDetectorRef, public notificationService: TestService) {
		this.config = notificationService.getData();
	}

	public changeTest(value: INotification[]) {
		this.notificationService.changeConfig(value);
	}
}
