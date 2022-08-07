import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ReportsErrorEnum} from '../../../entities/enums/reports-error.enum';
import {AdminButtonsEnum} from '../../../entities/enums/admin-buttons.enum';
@Component({
	selector: 'app-admin-buttons',
	templateUrl: './admin-buttons.component.html',
	styleUrls: ['./admin-buttons.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminButtonsComponent {
	@Input() canSubmit = false;
	@Input() notifierMassage: ReportsErrorEnum;
	@Input() disabledSave = true;
	@Output() adminButtonAction = new EventEmitter<AdminButtonsEnum>();
	public readonly AdminButtonsEnum = AdminButtonsEnum;
	public onAdminButtonAction(action: AdminButtonsEnum): void {
		this.adminButtonAction.emit(action);
	}
}
