import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-vacation',
	templateUrl: './vacation.component.html',
	styleUrls: ['./vacation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationComponent {
	@Input() changeDate: Date;

	public selectedDate: Date = new Date();
	public readonly title =
		RouterPaths.Vacation.charAt(0).toUpperCase() + RouterPaths.Vacation.slice(1);

	public onChangeDate(event: Date): void {
		this.selectedDate = event;
	}
}
