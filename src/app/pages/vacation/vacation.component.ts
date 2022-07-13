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
				top: `100px`,
				left: `300px`,
			},
			data: {},
		});
	}
}
