import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HolidayTypeEnum} from '../../../entities/enums/holiday-type.enum';
import {IHoliday} from '../../../entities/interfaces/holiday.interface';
import {CountryEnum} from '../../../entities/enums/country.enum';
import {DATE_FORMAT} from '../../../entities/constants/vacation.constant';
import * as moment from 'moment';

@Component({
	selector: 'app-set-schedule',
	templateUrl: './set-schedule.component.html',
	styleUrls: ['./set-schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetScheduleComponent {
	@Output() submitForm = new EventEmitter<FormGroup>();

	public days = Object.values(HolidayTypeEnum);
	public formGroup: FormGroup;
	public submittedForm: IHoliday;
	public setDays = this.data.values();
	public firstSetValue = moment(this.setDays.next().value).format(DATE_FORMAT);
	public lastSetValue = moment([...this.data].pop()).format(DATE_FORMAT);

	constructor(
		private dialogRef: MatDialogRef<SetScheduleComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Set<Date>,
	) {
		this.formGroup = new FormGroup({
			radioValue: new FormControl('', [Validators.required]),
			holidayName: new FormControl(''),
			halfdayTime: new FormControl(),
		});
	}

	public onSubmitForm(): void {
		this.submittedForm = {
			dayType: this.formGroup.controls.radioValue.value,
			date: new Date(),
			holidayName: this.formGroup.controls.holidayName.value,
			workingHours: this.formGroup.controls.halfdayTime.value,
			country: CountryEnum.Belarus,
		};
		this.dialogRef.close(this.submittedForm);
	}
}
