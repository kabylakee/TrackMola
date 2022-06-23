import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-date-picker',
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {}
