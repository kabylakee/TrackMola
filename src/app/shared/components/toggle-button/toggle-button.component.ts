import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';
import {ViewPeriod} from 'src/app/entities/interfaces/view-period';

@Component({
	selector: 'app-toggle-button',
	templateUrl: './toggle-button.component.html',
	styleUrls: ['./toggle-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent<T> {
	@Input() config: ViewPeriod<T>[] = [];

	@Output() changeSelectedValue = new EventEmitter<T>();
}
