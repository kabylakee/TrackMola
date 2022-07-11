import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-reports-button',
	templateUrl: './reports-button.component.html',
	styleUrls: ['./reports-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsButtonComponent {
	@Input() canSubmit = false;
}
