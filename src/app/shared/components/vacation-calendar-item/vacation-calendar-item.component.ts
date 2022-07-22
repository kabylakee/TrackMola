import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-vacation-calendar-item',
	templateUrl: './vacation-calendar-item.component.html',
	styleUrls: ['./vacation-calendar-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationCalendarItemComponent {
	@Input() dates: Date[];
}
