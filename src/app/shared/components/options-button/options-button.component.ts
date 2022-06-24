import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {OPTIONS_CONFIG} from 'src/app/entities/constants/options.constants';

@Component({
	selector: 'app-options-button',
	templateUrl: './options-button.component.html',
	styleUrls: ['./options-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsButtonComponent {
	public readonly options = OPTIONS_CONFIG;

	public isMenuOpen = false;

	@Output()
	copyTo = new EventEmitter();

	@Output()
	remove = new EventEmitter();

	@Output()
	moveTo = new EventEmitter();

	public switchFocus(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	public OnButtonClicked(event: string): void {
		switch (event) {
			case 'copyTo':
				this.copyTo.emit();
				break;
			case 'remove':
				this.remove.emit();
				break;
			case 'moveTo':
				this.moveTo.emit();
				break;
			default:
				break;
		}
	}
}
