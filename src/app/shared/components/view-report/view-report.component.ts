import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
	selector: 'app-view-report',
	templateUrl: './view-report.component.html',
	styleUrls: ['./view-report.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewReportComponent {
	constructor(
		private dialogRef: MatDialogRef<ViewReportComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
	) {}
}
