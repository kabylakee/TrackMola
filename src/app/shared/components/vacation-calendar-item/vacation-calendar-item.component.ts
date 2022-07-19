import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IVacationDay} from 'src/app/entities/interfaces/vacation-day.interface';

@Component({
	selector: 'app-vacation-calendar-item',
	templateUrl: './vacation-calendar-item.component.html',
	styleUrls: ['./vacation-calendar-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationCalendarItemComponent {
	@Input() date: Date;
	@Input() dayVacations: IVacationDay[];
}
