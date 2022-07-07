import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TOGGLE} from 'src/app/entities/constants/period.constants';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {Period} from 'src/app/entities/enums/period.enum';
import {IProject} from 'src/app/entities/interfaces/project.interface';
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
	public projects: IProject[] = Object.values(PROJECT_MOCK);

	public changeDatePicker(element: Period): void {
		this.periodRange = element;
	}
}
