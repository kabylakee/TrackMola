import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
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

	@Output() addTask = new EventEmitter<void>();
	@Output() saveReport = new EventEmitter<void>();
	@Output() submitReport = new EventEmitter<void>();

	public readonly buttons = ReportsButtonEnum;

	public onClick(button: ReportsButtonEnum): void {
		switch (button) {
			case ReportsButtonEnum.AddTask:
				this.addTask.emit();
				break;
			case ReportsButtonEnum.Save:
				this.saveReport.emit();
				break;
			case ReportsButtonEnum.Submit:
				this.submitReport.emit();
				break;
			default:
				break;
		}
	}
}
