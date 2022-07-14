import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {VacationRequestComponent} from 'src/app/shared/components/vacation-request/vacation-request.component';

@Component({
	selector: 'app-vacation',
	templateUrl: './vacation.component.html',
	styleUrls: ['./vacation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationComponent {
	public readonly title =
		RouterPaths.Vacation.charAt(0).toUpperCase() + RouterPaths.Vacation.slice(1);

	constructor(public dialog: MatDialog) {}

	public dialogOpen(): void {
		this.dialog.open(VacationRequestComponent, {
			position: {
				top: 'calc(50vh - 10.875 * var(--offset))',
				left: 'calc(50vw - 14.125 * var(--offset))',
			},
			data: {},
		});
	}
}
