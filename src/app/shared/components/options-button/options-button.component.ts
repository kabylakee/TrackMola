import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {OPTIONS_CONFIG} from 'src/app/entities/constants/options.constants';
import {OptionsEvent} from 'src/app/entities/enums/options.enum';

@Component({
	selector: 'app-options-button',
	templateUrl: './options-button.component.html',
	styleUrls: ['./options-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsButtonComponent {
	public readonly options = OPTIONS_CONFIG;

	public readonly optionsEvent = OptionsEvent;

	public isMenuOpen = false;

	public switchFocus(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	@Output()
	optionSelected = new EventEmitter<OptionsEvent>();
}
