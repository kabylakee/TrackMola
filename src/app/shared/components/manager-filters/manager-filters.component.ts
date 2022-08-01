import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {Period} from 'src/app/entities/enums/period.enum';

@Component({
	selector: 'app-manager-filters',
	templateUrl: './manager-filters.component.html',
	styleUrls: ['./manager-filters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerFiltersComponent {
	@Output() export = new EventEmitter<void>();
	@Output() approve = new EventEmitter<void>();
	@Output() notify = new EventEmitter<void>();

	public readonly periodRange: Period = Period.Month;

	public onExportClick(): void {
		this.export.emit();
	}

	public onApproveClick(): void {
		this.approve.emit();
	}

	public onNotifyClick(): void {
		this.notify.emit();
	}
}
