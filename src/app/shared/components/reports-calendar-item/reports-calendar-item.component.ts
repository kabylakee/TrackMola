import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {NotWorkingDay} from 'src/app/entities/enums/not-working-day.enum';
import {NumberEnum} from 'src/app/entities/enums/number.enum';
import {OrdinalNumberEnum} from 'src/app/entities/enums/ordinal-number.enum';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';
import {HolidayService} from '../../services/holiday.service';

@Component({
	selector: 'app-reports-calendar-item',
	templateUrl: './reports-calendar-item.component.html',
	styleUrls: ['./reports-calendar-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsCalendarItemComponent implements OnInit {
	@Input() dayInfo: IReportsDayInfo;
	@Input() disabled = false;

	@Output() selectDay = new EventEmitter<Date>();

	public isHoliday = false;

	constructor(private holidaysService: HolidayService) {}

	public ngOnInit(): void {
		if (this.holidaysService.disabledWeekend(this.dayInfo.date)) this.disabled = true;
		this.isHoliday = this.holidaysService.isHoliday(this.dayInfo.date);
	}

	public weekNumber = OrdinalNumberEnum;
	public numbers = NumberEnum;

	public get isPresent(): boolean {
		const today = new Date();

		if (this.dayInfo.isWeekInfo) {
			return (
				this.getWeek(this.dayInfo.date) === this.getWeek(today) &&
				this.dayInfo.date.getMonth() === today.getMonth() &&
				this.dayInfo.date.getFullYear() === today.getFullYear()
			);
		}

		return (
			this.dayInfo.date.getDate() === today.getDate() &&
			this.dayInfo.date.getMonth() === today.getMonth() &&
			this.dayInfo.date.getFullYear() === today.getFullYear()
		);
	}

	public get notWorkingDayType(): string {
		return this.dayInfo.paid ? NotWorkingDay.Vacation : NotWorkingDay.DayOff;
	}

	public getWeek(date: Date): number {
		const dateNumber = date.getDate();
		const dayNumber = date.getDay() === 0 ? 7 : date.getDay();
		return Math.ceil((dateNumber - dayNumber) / 7) + 1;
	}
}
