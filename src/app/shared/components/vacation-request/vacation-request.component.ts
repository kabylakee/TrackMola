import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
		this.requestForm = new FormGroup({
			dateFrom: new FormControl(),
			dateTo: new FormControl(),
			comments: new FormControl(),
			paid: new FormControl(),
		});
	}

	public onSend(): void {
		if (!this.requestForm.controls.dateFrom.value) {
			this.field = 'Date from';
			this.notification = true;
		}
		if (!this.requestForm.controls.dateTo.value) {
			this.field = 'Date to';
			this.notification = true;
		}
		if (!this.requestForm.controls.dateFrom.value && !this.requestForm.controls.dateTo.value) {
			this.field = 'Date';
			this.notification = true;
		}
		if (this.requestForm.controls.dateFrom.value && this.requestForm.controls.dateTo.value) {
			this.notification = false;
			this.sendRequest.emit(this.requestForm);
			this.dialogRef.close();
		}
	}
}
