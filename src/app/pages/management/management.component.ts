import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {ExportFormComponent} from 'src/app/shared/components/export-form/export-form.component';

@Component({
	selector: 'app-management',
	templateUrl: './management.component.html',
	styleUrls: ['./management.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent {
	public readonly title =
		RouterPaths.Management.charAt(0).toUpperCase() + RouterPaths.Management.slice(1);

	constructor(public dialog: MatDialog) {}

	public openExportWindow(): void {
		// const dialogRef =
		this.dialog.open(ExportFormComponent, {
			position: {
				top: 'calc(50vh)',
				left: 'calc(50vw)',
			},
			data: {},
		});
	}
}
