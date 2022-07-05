import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TOGGLE} from 'src/app/entities/constants/period.constants';
import {Period} from 'src/app/entities/enums/period.enum';
import {IViewPeriod} from 'src/app/entities/interfaces/view-period.interface';

@Component({
	selector: 'app-table-filter',
	templateUrl: './table-filter.component.html',
	styleUrls: ['./table-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent {
	public readonly toggleConfig: IViewPeriod<Period>[] = TOGGLE;
	public periodRange: Period;

	changeDatePicker(element: Period): void {
		this.periodRange = element;
	}
}
