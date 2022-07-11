import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';

@Component({
	selector: 'app-vacation',
	templateUrl: './vacation.component.html',
	styleUrls: ['./vacation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationComponent {
	public readonly title =
		RouterPaths.Vacation.charAt(0).toUpperCase() + RouterPaths.Vacation.slice(1);
}
