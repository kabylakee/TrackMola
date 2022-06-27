import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';

@Component({
	selector: 'app-hours-card',
	templateUrl: './hours-card.component.html',
	styleUrls: ['./hours-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoursCardComponent implements OnChanges {
	@Input()
	totalHours = 0;

	public hourStatus = 'not-enough';

	public readonly normalHoursCount = 8;

	ngOnChanges() {
		switch (true) {
			case this.totalHours < this.normalHoursCount:
				this.hourStatus = 'not-enough';
				break;
			case this.totalHours === this.normalHoursCount:
				this.hourStatus = 'enough';
				break;
			case this.totalHours > this.normalHoursCount:
				this.hourStatus = 'overtime';
				break;
			default:
				break;
		}
	}
}
