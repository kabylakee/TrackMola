import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-year-calendar',
	templateUrl: './year-calendar.component.html',
	styleUrls: ['./year-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearCalendarComponent {
	@Input() datePickerDate = new Date();
	public calendars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
