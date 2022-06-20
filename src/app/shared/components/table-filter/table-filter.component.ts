import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-table-filter',
	templateUrl: './table-filter.component.html',
	styleUrls: ['./table-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent {}
