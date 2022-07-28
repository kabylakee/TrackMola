import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HolidayTypeEnum} from '../../../entities/enums/holiday-type.enum';

@Component({
	selector: 'app-set-schedule',
	templateUrl: './set-schedule.component.html',
	styleUrls: ['./set-schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetScheduleComponent {
	@Output() submitForm = new EventEmitter();

	public days = Object.values(HolidayTypeEnum);
	public formGroup: FormGroup = new FormGroup({});
	// public isChecked = false;

	constructor(
		private dialogRef: MatDialogRef<SetScheduleComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
		private fb: FormBuilder,
	) {
		this.formGroup = fb.group({
			radioValue: ['', [Validators.required]],
			holidayName: '',
			halfdayTime: '',
		});
	}

	public submit(): void {
		this.submitForm.emit(this.formGroup);
	}
}
