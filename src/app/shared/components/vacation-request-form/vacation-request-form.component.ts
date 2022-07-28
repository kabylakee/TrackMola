import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {VacationRequest} from 'src/app/entities/enums/vacation-request.enum';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';

@Component({
	selector: 'app-vacation-request-form',
	templateUrl: './vacation-request-form.component.html',
	styleUrls: ['./vacation-request-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationRequestFormComponent {
	public requestForm: FormGroup;
	public message: string;

	public totalDays = 25;
	public daysUsed = 14;
	public daysNumber = true;
	private formToImport: IVacation;
	constructor(
		private dialogRef: MatDialogRef<VacationRequestFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
	) {
		this.requestForm = new FormGroup(
			{
				dateFrom: new FormControl('', [Validators.required, this.dateValidator]),
				dateTo: new FormControl('', [Validators.required, this.dateValidator]),
				comments: new FormControl(),
				paid: new FormControl(),
			},
			{
				validators: this.formValidator,
			},
		);
	}

	private dateValidator(control: FormControl): {[s: string]: boolean} | null {
		if (control.value > new Date()) {
			return null;
		}
		return {dateFrom: true};
	}

	private formValidator(control: AbstractControl): ValidationErrors | null {
		if (!control.get('dateFrom')?.value || !control.get('dateTo')?.value) {
			return {error: true};
		}
		if (
			!control.get('paid')?.value &&
			control.get('dateTo')?.value >= control.get('dateFrom')?.value
		) {
			return null;
		}

		let selectedDays =
			(control.get('dateTo')?.value.getTime() - control.get('dateFrom')?.value.getTime()) /
			(1000 * 3600 * 24);
		if (control.get('paid')?.value && (selectedDays === 11 || selectedDays === 14)) {
			return null;
		}
		return {error: true};
	}

	public onSend(): void {
		if (!this.requestForm.controls.dateFrom.valid || !this.requestForm.controls.dateTo.valid) {
			this.message = 'Date is invalid';
			return;
		}

		let selectedDays =
			(this.requestForm.controls.dateTo.value.getTime() -
				this.requestForm.controls.dateFrom.value.getTime()) /
			(1000 * 3600 * 24);

		if (this.requestForm.controls.paid.value && selectedDays > this.totalDays - this.daysUsed) {
			this.message = 'Choose less days';
			this.daysNumber = false;
			return;
		}
		if (this.requestForm.controls.paid.value && selectedDays !== 11 && selectedDays !== 14) {
			this.message = 'Choose only 11 or 14 paid days';
			return;
		}
		if (!this.requestForm.valid) {
			this.message = 'Date is invalid';
			return;
		}

		this.formToImport = {
			dateFrom: this.requestForm.controls.dateFrom.value,
			dateTo: this.requestForm.controls.dateTo.value,
			paid: this.requestForm.controls.paid.value,
			comments: this.requestForm.controls.comments.value,
			status: VacationRequest.Unapproved,
			employee: EMPLOYEE_MOCK[0],
		};
		this.dialogRef.close(this.formToImport);
	}
}
