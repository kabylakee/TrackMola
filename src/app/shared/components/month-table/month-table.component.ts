import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
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
	@Output() selectDay = new EventEmitter<Date>();

	public onSelectDay(date: Date): void {
		this.selectDay.emit(date);
	}
}
