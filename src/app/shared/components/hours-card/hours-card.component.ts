import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TimeStatus} from 'src/app/entities/enums/timeStatus.enum';
import {IHours} from '../../../entities/interfaces/hours.interface';
import {DEFAULT_DAY_WORKTIME, DEFAULT_TIME} from '../../../entities/constants/hours.constants';

@Component({
	selector: 'app-hours-card',
	templateUrl: './hours-card.component.html',
	styleUrls: ['./hours-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoursCardComponent implements OnChanges {
	@Input() public sumTime: IHours = DEFAULT_TIME;
	@Input() public normalHoursCount = DEFAULT_DAY_WORKTIME;
	@Input() public hasBackground = true;

	public readonly timeStatus = TimeStatus;
	public currentTimeStatus: TimeStatus;

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.sumTime) {
			this.setTimeStatus();
		}
	}

	private setTimeStatus(): void {
		this.currentTimeStatus = this.timeStatus.Enough;
		if (this.sumTime.time < this.normalHoursCount) {
			this.currentTimeStatus = this.timeStatus.Unfinished;
		}
		if (this.sumTime.time > this.normalHoursCount) {
			this.currentTimeStatus = this.timeStatus.Overwork;
		}
	}
}
