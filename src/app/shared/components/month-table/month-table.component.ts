import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TimeStatus} from 'src/app/entities/enums/timeStatus.enum';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';

@Component({
	selector: 'app-month-table',
	templateUrl: './month-table.component.html',
	styleUrls: ['./month-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthTableComponent implements OnInit {
	@Input() selectedDate: Date = new Date();
	@Input() daysInfo: IReportsDayInfo[];

	public defaultDayInfo: IReportsDayInfo = {
		date: new Date(),
		taskCount: 0,
		total: 0,
		overtime: 0,
		timeStatus: TimeStatus.Enough,
		isVacation: false,
		paid: false,
		disabled: false,
	};

	public allDaysInfo: IReportsDayInfo[] = []; // days with info and empty days

	public ngOnInit(): void {
		this.makeCalendar(this.daysInfo);
	}

	private makeCalendar(daysInfo: IReportsDayInfo[]): void {
		const currentDay = new Date().getDate();
		const currentMonth = new Date().getMonth();
		const currentYear = new Date().getFullYear();

		const selectedMonth = this.selectedDate.getMonth();
		const selectedYear = this.selectedDate.getFullYear();

		const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
		const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
		const daysInMonth = lastDayOfMonth.getDate();

		const paddingDaysStart = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
		const paddingDaysEnd = lastDayOfMonth.getDay() === 0 ? 0 : 7 - lastDayOfMonth.getDay();

		for (let i = 0; i < paddingDaysStart - 1; i++) {
			this.allDaysInfo.push({...this.defaultDayInfo});
			this.allDaysInfo[i].date = new Date(selectedYear, selectedMonth, i - paddingDaysStart + 2);
			this.allDaysInfo[i].disabled = true;
		}

		for (let i = paddingDaysStart - 1; i < paddingDaysStart + daysInMonth - 1; i++) {
			this.allDaysInfo.push({...this.defaultDayInfo});
			this.allDaysInfo[i].date = new Date(selectedYear, selectedMonth, i - paddingDaysStart + 2);

			if (
				i - paddingDaysStart + 2 < currentDay &&
				selectedMonth === currentMonth &&
				selectedYear === currentYear
			) {
				this.allDaysInfo[i].timeStatus = TimeStatus.Unfinished;
			}

			daysInfo.forEach((dayInfo) => {
				if (+dayInfo.date === +this.allDaysInfo[i].date) this.allDaysInfo[i] = dayInfo;
			});

			if (this.allDaysInfo[i].date.getDay() === 6 || this.allDaysInfo[i].date.getDay() === 0) {
				this.allDaysInfo[i].disabled = true;
			}
		}

		for (
			let i = paddingDaysStart + daysInMonth - 1;
			i < paddingDaysStart + daysInMonth + paddingDaysEnd - 1;
			i++
		) {
			this.allDaysInfo.push({...this.defaultDayInfo});
			this.allDaysInfo[i].date = new Date(
				selectedYear,
				selectedMonth + 1,
				i - paddingDaysStart - daysInMonth + 1,
			);
			this.allDaysInfo[i].disabled = true;
		}
	}
}
