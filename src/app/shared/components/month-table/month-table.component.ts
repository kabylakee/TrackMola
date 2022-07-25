import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {WeekDayEnum} from 'src/app/entities/enums/week-day.enum';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';

@Component({
	selector: 'app-month-table',
	templateUrl: './month-table.component.html',
	styleUrls: ['./month-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthTableComponent {
	@Input() selectedDate: Date = new Date();
	@Input() daysInfo: IReportsDayInfo[];
	@Input() show: boolean = true;

	@Output() selectDay = new EventEmitter<Date>();

	public readonly weekDay = Object.values(WeekDayEnum);
	public readonly legendItems = [
		DayTypeEnum.Incomplete,
		DayTypeEnum.OverWork,
		DayTypeEnum.Vacation,
		DayTypeEnum.DayOff,
		DayTypeEnum.Holiday,
	];

	public onSelectDay(date: Date): void {
		this.selectDay.emit(date);
	}
}
