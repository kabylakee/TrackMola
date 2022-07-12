import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';

@Component({
	selector: 'app-calendar-legend',
	templateUrl: './calendar-legend.component.html',
	styleUrls: ['./calendar-legend.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarLegendComponent {
	@Input() legendItems: DayTypeEnum[];
}
