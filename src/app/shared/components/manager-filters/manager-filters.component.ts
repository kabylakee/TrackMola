import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Period} from 'src/app/entities/enums/period.enum';

@Component({
	selector: 'app-manager-filters',
	templateUrl: './manager-filters.component.html',
	styleUrls: ['./manager-filters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerFiltersComponent {
	public readonly periodRange: Period = Period.Month;
}
