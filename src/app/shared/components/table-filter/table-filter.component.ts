import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TOGGLE} from 'src/app/entities/constants/period.constants';

@Component({
	selector: 'app-table-filter',
	templateUrl: './table-filter.component.html',
	styleUrls: ['./table-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent {
  public readonly toggleConfig = TOGGLE;
}
