import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';
import {IViewPeriod} from 'src/app/entities/interfaces/view-period.interface';

@Component({
	selector: 'app-toggle-button',
	templateUrl: './toggle-button.component.html',
	styleUrls: ['./toggle-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent<T> {
	@Input() config: IViewPeriod<T>[] = [];

	@Output() changeSelectedValue = new EventEmitter<T>();
}
