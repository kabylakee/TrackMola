import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ReportsButtonEnum} from 'src/app/entities/enums/reports-button.enum';
import {ReportsErrorEnum} from 'src/app/entities/enums/reports-error.enum';

@Component({
	selector: 'app-reports-button',
	templateUrl: './reports-button.component.html',
	styleUrls: ['./reports-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsButtonComponent {
	@Input() disableSubmit = true;
	@Input() notifierMassage: ReportsErrorEnum;
	@Input() disabledSave = true;

	@Output() reportButtonAction = new EventEmitter<ReportsButtonEnum>();

	public readonly ReportsButtonEnum = ReportsButtonEnum;

	public onReportButtonAction(action: ReportsButtonEnum): void {
		this.reportButtonAction.emit(action);
	}
}
