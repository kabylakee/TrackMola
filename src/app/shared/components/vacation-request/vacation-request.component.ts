import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IVacation} from '../../../entities/interfaces/vacation.interface';
import {VACATION} from '../../../entities/constants/vacation.constant';
import {VacationRequest} from '../../../entities/enums/vacation-request.enum';

@Component({
	selector: 'app-vacation-request',
	templateUrl: './vacation-request.component.html',
	styleUrls: ['./vacation-request.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationRequestComponent {
	public readonly vacations: IVacation[] = VACATION;
	public readonly VacationRequest = VacationRequest;
}
