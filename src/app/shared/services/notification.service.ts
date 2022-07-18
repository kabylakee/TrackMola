import {Injectable} from '@angular/core';
import {NOTIFICATION_CONTENT} from 'src/app/entities/constants/notifications.constants';
import {INotification} from 'src/app/entities/interfaces/notification.interface';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NotificationService {
	public readonly config$ = new Subject<INotification[]>();

	constructor() {
		setTimeout(() => {
			this.config$.next(NOTIFICATION_CONTENT);
		}, 3000);
	}

	public changeConfig(config: INotification[]): void {
		this.config$.next(config);
	}

	getData(): Observable<INotification[]> {
		return this.config$.asObservable();
	}
}
