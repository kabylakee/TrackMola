import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'app-set-schedule',
	templateUrl: './set-schedule.component.html',
	styleUrls: ['./set-schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetScheduleComponent {
	public days: string[] = ['Holiday', 'Weekend', 'Work day', 'Half-day'];
	public formGroup: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<SetScheduleComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
	) {}
}
