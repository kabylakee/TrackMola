import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Period} from 'src/app/entities/enums/period.enum';

@Component({
	selector: 'app-vacation-header',
	templateUrl: './vacation-header.component.html',
	styleUrls: ['./vacation-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationHeaderComponent {
	public periodRange: Period = Period.Month;
}
