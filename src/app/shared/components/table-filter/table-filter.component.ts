import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TOGGLE} from 'src/app/entities/constants/period.constants';
import {Period} from 'src/app/entities/enums/period.enum';
import {IViewPeriod} from 'src/app/entities/interfaces/view-period.interface';
import {IHours} from '../../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../../entities/constants/hours.constants';

@Component({
	selector: 'app-table-filter',
	templateUrl: './table-filter.component.html',
	styleUrls: ['./table-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent {
	@Input() public sumTime: IHours = DEFAULT_TIME;

	public readonly toggleConfig: IViewPeriod<Period>[] = TOGGLE;
	public periodRange: Period;

	public changeDatePicker(element: Period): void {
		this.periodRange = element;
	}
}
