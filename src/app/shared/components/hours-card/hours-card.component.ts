import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TimeStatus} from 'src/app/entities/enums/timeStatus.enum';

@Component({
	selector: 'app-hours-card',
	templateUrl: './hours-card.component.html',
	styleUrls: ['./hours-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoursCardComponent implements OnChanges {
	@Input() totalHours = 0;

	@Input() normalHoursCount = 8;

	@Input() hasBackground = true;

	public readonly timeStatus = TimeStatus;

	public currentTimeStatus = this.timeStatus.NotEnough;

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['totalHours']) {
			this.setTimeStatus();
		}
	}

	private setTimeStatus(): void {
		if (this.totalHours < this.normalHoursCount) {
			this.currentTimeStatus = this.timeStatus.NotEnough;
		} else if (this.totalHours < this.normalHoursCount) {
			this.currentTimeStatus = this.timeStatus.NotEnough;
		} else {
			this.currentTimeStatus = this.timeStatus.Overtime;
		}
	}
}
