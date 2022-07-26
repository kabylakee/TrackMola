import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';
import {VACATION_TABS} from 'src/app/entities/constants/vacation-tab.constants';
import {IVacationTab} from 'src/app/entities/interfaces/vacation-tab.interface';

@Component({
	selector: 'app-vacation-toggle',
	templateUrl: './vacation-toggle.component.html',
	styleUrls: ['./vacation-toggle.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationToggleComponent {
	@Input() tab: IVacationTab;

	@Output() changeSelectedValue = new EventEmitter<IVacationTab>();

	public tabs: IVacationTab[] = VACATION_TABS;
}
