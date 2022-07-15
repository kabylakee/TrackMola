import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Output} from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
	selector: 'app-vacation-request',
	templateUrl: './vacation-request.component.html',
	styleUrls: ['./vacation-request.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationRequestComponent {
	@Output() sendRequest = new EventEmitter();

	public requestForm: FormGroup;
	public field: string;
	public notification = false;

	constructor(
		private dialogRef: MatDialogRef<VacationRequestComponent>,
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

	formValidator(control: AbstractControl): ValidationErrors | null {
		if (!control.get('dateFrom')?.value || !control.get('dateTo')?.value) return {error: true};
		if (control.get('dateTo')?.value >= control.get('dateFrom')?.value) {
			return null;
		}
		return {error: true};
	}

	public onSend(): void {
		if (!this.requestForm.controls.dateFrom.valid) {
			this.field = 'Date from is invalid';
			this.notification = true;
			return;
		}
		if (!this.requestForm.controls.dateTo.valid) {
			this.field = 'Date to is invalid';
			this.notification = true;
			return;
		}
		if (!this.requestForm.valid) {
			this.field = 'Date to is invalid';
			this.notification = true;
			return;
		}

		this.notification = false;
		this.sendRequest.emit(this.requestForm);
		this.dialogRef.close();
	}
}
