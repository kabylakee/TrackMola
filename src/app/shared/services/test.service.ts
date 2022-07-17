import {Injectable} from '@angular/core';
import {NOTIFICATION_CONTENT} from 'src/app/entities/constants/notifications.constants';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {Observable, of, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TestService {
	public readonly config$ = new Subject<INotification[]>();

	public changeConfig(config: INotification[]): void {
		this.config$.next(config);
	}

	getData(): Observable<INotification[]> {
		const config = of(NOTIFICATION_CONTENT);
		return config;
	}
}
