import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ReportsButtonEnum} from 'src/app/entities/enums/reports-button.enum';
import {ReportsErrorEnum} from 'src/app/entities/enums/reports-error.enum';
import {IReportButtonAction} from 'src/app/entities/interfaces/report-button-action.interface';

@Component({
	selector: 'app-reports-button',
	templateUrl: './reports-button.component.html',
	styleUrls: ['./reports-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsButtonComponent {
	@Input() canSubmit = false;
	@Input() notifierMassage: ReportsErrorEnum;

	@Output() addTask = new EventEmitter<IReportButtonAction>();
	@Output() saveReport = new EventEmitter<IReportButtonAction>();
	@Output() submitReport = new EventEmitter<IReportButtonAction>();

	public readonly buttons = ReportsButtonEnum;

	public onClick(button: ReportsButtonEnum): void {
		switch (button) {
			case ReportsButtonEnum.AddTask:
				this.addTask.emit({actionType: ReportsButtonEnum.AddTask});
				break;
			case ReportsButtonEnum.Save:
				this.saveReport.emit({actionType: ReportsButtonEnum.Save});
				break;
			case ReportsButtonEnum.Submit:
				this.submitReport.emit({actionType: ReportsButtonEnum.Submit});
				break;
			default:
				break;
		}
	}
}
