import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NotWorkingDay} from 'src/app/entities/enums/not-working-day.enum';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';

@Component({
	selector: 'app-reports-calendar-item',
	templateUrl: './reports-calendar-item.component.html',
	styleUrls: ['./reports-calendar-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsCalendarItemComponent {
	@Input() dayInfo: IReportsDayInfo;
	@Input() disabled = false;

	public get isPresent(): boolean {
		const today = new Date();
		return (
			this.dayInfo.date.getDate() === today.getDate() &&
			this.dayInfo.date.getMonth() === today.getMonth()
		);
	}

	public isPaid(): string {
		return this.dayInfo.paid ? NotWorkingDay.Vacation : NotWorkingDay.DayOff;
	}
}
