import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
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
	@Input() show: boolean = false;
	@Output() selectDay = new EventEmitter<Date>();

	public readonly weekDay = Object.values(WeekDayEnum);

	public onSelectDay(date: Date): void {
		this.selectDay.emit(date);
	}
}
