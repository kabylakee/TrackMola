import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {INotification} from 'src/app/entities/interfaces/notification.interface';

@Component({
	selector: 'app-bell',
	templateUrl: './bell.component.html',
	styleUrls: ['./bell.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BellComponent {
	@Input() array: INotification[] = [];
	public isCardOpen = false;
	public isShownNotification = true;

	showCard() {
		console.log(this.array);
		if (!this.isCardOpen) {
			this.isCardOpen = true;
		} else {
			this.isCardOpen = false;
		}
	}

	snoozeNotification(i: number) {
		this.array.splice(i, 1);
		//TODO: snooze for 3 hours late;
	}

	dismissNotification(i: number) {
		this.array.splice(i, 1);
	}

	dismissNotificationAll() {
		this.array = [];
	}

	snoozeNotificationAll() {
		this.array = [];
		//TODO: snooze for 3 hours late;
	}
}
