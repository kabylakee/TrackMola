import {ChangeDetectionStrategy, Component, ViewChild, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MY_FORMATS} from 'src/app/entities/constants/formats.constants';
import {Period} from 'src/app/entities/enums/period.enum';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import {MatDatepicker} from '@angular/material/datepicker';

// tslint:disable-next-line:no-duplicate-imports

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

/** @title Datepicker with custom formats */
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
	@ViewChild('picker') pick!: MatDatepicker<_moment.Moment>;
	date = new FormControl(moment());
	readonly period = Period;
	@Input() periodRange: Period;

	changeDateRange(increment: number): void {
		switch (this.periodRange) {
			case this.period.Day: {
				const sd = this.date.value?.add(increment, 'days');
				this.pick.select(sd as _moment.Moment);
				break;
			}
			case this.period.Month: {
				const sd = this.date.value?.add(increment, 'month');
				this.pick.select(sd as _moment.Moment);
				break;
			}
		}
	}
}
