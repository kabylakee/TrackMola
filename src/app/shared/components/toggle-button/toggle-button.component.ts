import {ChangeDetectionStrategy, Component, Input, Output} from '@angular/core';
import {TOGGLE} from 'src/app/entities/constants/period.constants';
import {ViewPeriod} from 'src/app/entities/interfaces/view-period';
import {EventEmitter} from '@angular/core';

@Component({
	selector: 'app-toggle-button',
	templateUrl: './toggle-button.component.html',
	styleUrls: ['./toggle-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent {

  toggle = TOGGLE;

	// @Input() readonly myConf: ViewPeriod;

	@Output() Click = new EventEmitter();
}
