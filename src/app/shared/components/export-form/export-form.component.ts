import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
	selector: 'app-export-form',
	templateUrl: './export-form.component.html',
	styleUrls: ['./export-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportFormComponent {
	public exportForm: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<ExportFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
	) {
		this.exportForm = new FormGroup({
			dateFrom: new FormControl(''),
			dateTo: new FormControl(''),
		});
	}
}
