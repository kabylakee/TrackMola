import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Output} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IVacationRequest} from 'src/app/entities/interfaces/vacation-request.interface';

@Component({
	selector: 'app-vacation-request',
	templateUrl: './vacation-request.component.html',
	styleUrls: ['./vacation-request.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationRequestComponent {
	@Output() sendRequest = new EventEmitter();

	public request: IVacationRequest;
	public field: string;
	public notification = false;

	constructor(
		private dialogRef: MatDialogRef<VacationRequestComponent>,
		@Inject(MAT_DIALOG_DATA) public data: IVacationRequest,
	) {
		this.request = data;
	}

	public onSend(): void {
		if (!this.request.dateFrom) {
			this.field = 'Date from';
			this.notification = true;
		}
		if (!this.request.dateTo) {
			this.field = 'Date to';
			this.notification = true;
		}
		if (!this.request.dateFrom && !this.request.dateTo) {
			this.field = 'Date';
			this.notification = true;
		}
		if (this.request.dateFrom && this.request.dateTo) {
			this.notification = false;
			this.sendRequest.emit(this.request);
			this.dialogRef.close();
		}
	}
}
