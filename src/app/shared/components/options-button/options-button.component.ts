import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {
	MatSnackBar,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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

	@Output() optionSelected = new EventEmitter<string>();
	@Output() actionHanding = new EventEmitter<IOptionInterface>();

	public readonly options = Object.values(OPTIONS_CONFIG);
	public isMenuOpen = false;
	public readonly OptionsTitle = OptionsTitle;
	public datepickerValue: Date;
	horizontalPosition: MatSnackBarHorizontalPosition = 'start';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';

	constructor(private _snackBar: MatSnackBar) {}

	public switchFocus(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	public onActionHanding(date: Date, action: OptionsTitle): void {
		this.actionHanding.emit({date, action});
		this.openSnackBar(OPTIONS_CONFIG[action].notifier);
	}

	private openSnackBar(massage: string): void {
		this._snackBar.open(massage, '╳', {
			verticalPosition: this.verticalPosition,
			horizontalPosition: this.horizontalPosition,
			duration: 3000,
		});
	}
}
