import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-reports-calendar-item',
	templateUrl: './reports-calendar-item.component.html',
	styleUrls: ['./reports-calendar-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsCalendarItemComponent {}
