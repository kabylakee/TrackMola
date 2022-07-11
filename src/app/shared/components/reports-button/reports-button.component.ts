import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ReportsButtonEnum} from 'src/app/entities/enums/reports-button.enum';

@Component({
	selector: 'app-reports-button',
	templateUrl: './reports-button.component.html',
	styleUrls: ['./reports-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsButtonComponent {
	@Input() canSubmit = false;
	@Input() showNotifier = false;

	public readonly buttons = ReportsButtonEnum;
}
