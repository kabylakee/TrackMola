import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {OPTIONS_CONFIG} from 'src/app/entities/constants/options.constants';
import {OptionsTitle} from '../../../entities/enums/options.enum';
import {IOptionInterface} from '../../../entities/interfaces/option.interface';

@Component({
	selector: 'app-options-button',
	templateUrl: './options-button.component.html',
	styleUrls: ['./options-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsButtonComponent {
	@Input() isDisabled: boolean | null = true;
	@Output() actionHanding = new EventEmitter<IOptionInterface>();

	public readonly options = Object.values(OPTIONS_CONFIG);

	public isMenuOpen = false;

	public readonly OptionsTitle = OptionsTitle;

	public datepickerValue: Date;

	public switchFocus(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	public onActionHanding(date: Date, action: OptionsTitle): void {
		this.actionHanding.emit({date, action});
	}
}
