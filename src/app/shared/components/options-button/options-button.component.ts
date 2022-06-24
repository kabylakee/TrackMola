import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {OPTIONS_CONFIG} from 'src/app/entities/constants/options.constants';

@Component({
	selector: 'app-options-button',
	templateUrl: './options-button.component.html',
	styleUrls: ['./options-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsButtonComponent {
	@Output()
	optionSelected = new EventEmitter<string>();

	public readonly options = Object.values(OPTIONS_CONFIG);

	public isMenuOpen = false;

	public switchFocus(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}
}
