import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TimeStatus} from 'src/app/entities/enums/timeStatus.enum';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';

@Component({
	selector: 'app-month-table',
	templateUrl: './month-table.component.html',
	styleUrls: ['./month-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthTableComponent {
	public dayData: IReportsDayInfo = {
		date: new Date(Date.now() - Math.random() * 1e10),
		taskCount: 2,
		total: 3,
		overtime: 0,
		timeStatus: TimeStatus.Unfinished,
		isVacation: false,
		paid: false,
	};
}
