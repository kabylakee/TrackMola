import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {IAdminCalendarItem} from 'src/app/entities/interfaces/admin-calendar-item.interface';

@Component({
	selector: 'app-admin-calendar-item',
	templateUrl: './admin-calendar-item.component.html',
	styleUrls: ['./admin-calendar-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCalendarItemComponent {
	@Input() day: IAdminCalendarItem;
	@Input() disabled: boolean;

	@Output() selectDay = new EventEmitter<Date>();

	public DayTypeEnum = DayTypeEnum;

	public checked = false;

	public onSelectDay(): void {
		if (!this.disabled) {
			this.checked = !this.checked;
			this.selectDay.emit(this.day.date);
		}
	}
}
