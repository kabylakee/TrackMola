import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TOGGLE} from 'src/app/entities/constants/period.constants';
import {Period} from 'src/app/entities/enums/period.enum';
import {IViewPeriod} from 'src/app/entities/interfaces/view-period.interface';

@Component({
	selector: 'app-table-filter',
	templateUrl: './table-filter.component.html',
	styleUrls: ['./table-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent {
	@Output() valueChange = new EventEmitter<string>();
	public value: string = '';
  public periodRange: Period;
	public readonly toggleConfig: IViewPeriod<Period>[] = TOGGLE;

	public onValueChange($event: string): void {
		this.value = $event;
		this.valueChange.emit(this.value);
		console.log(this.value);
	}

	public changeDatePicker(element: Period): void {
		this.periodRange = element;
	}
}
