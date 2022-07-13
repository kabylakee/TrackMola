import {
	ChangeDetectionStrategy,
	Component,
	ViewChild,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MY_FORMATS} from 'src/app/entities/constants/formats.constants';
import {Period} from 'src/app/entities/enums/period.enum';

import * as moment from 'moment';
// import {default as _rollupMoment} from 'moment';
import {MatDatepicker} from '@angular/material/datepicker';

// const moment = _rollupMoment || _moment;

@Component({
	selector: 'app-date-picker',
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
		},
		{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
	],
})
export class DatePickerComponent {
	@ViewChild('picker') pick!: MatDatepicker<moment.Moment>;
	public date = new FormControl(moment());
	readonly period = Period;
	@Input() periodRange: Period;
	@Output() changeDate = new EventEmitter();

	public changeDateRange(increment: number): void {
		switch (this.periodRange) {
			case this.period.Day: {
				const changedDate = this.date.value?.add(increment, 'days');
				this.pick.select(changedDate as moment.Moment);
				break;
			}
			case this.period.Month: {
				const changedDate = this.date.value?.add(increment, 'month');
				this.pick.select(changedDate as moment.Moment);
				break;
			}
		}
	}
}
