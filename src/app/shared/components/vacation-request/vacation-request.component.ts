import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
	selector: 'app-vacation-request',
	templateUrl: './vacation-request.component.html',
	styleUrls: ['./vacation-request.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationRequestComponent {
	constructor(
		private dialogRef: MatDialogRef<VacationRequestComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
	) {}
	public closeMe() {
		this.dialogRef.close();
	}
}
