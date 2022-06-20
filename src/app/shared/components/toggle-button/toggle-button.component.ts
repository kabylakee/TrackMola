import {ChangeDetectionStrategy, Component} from '@angular/core';

enum List {
	day = 'day',
	week = 'week',
	month = 'month',
}

@Component({
	selector: 'app-toggle-button',
	templateUrl: './toggle-button.component.html',
	styleUrls: ['./toggle-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent {
	keys = Object.keys;

	list = List;
}
