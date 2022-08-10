import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IVacation} from '../../../entities/interfaces/vacation.interface';
import {VACATION} from '../../../entities/constants/vacation.constant';
import {VacationRequest} from '../../../entities/enums/vacation-request.enum';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';

@Component({
	selector: 'app-vacation-request',
	templateUrl: './vacation-request.component.html',
	styleUrls: ['./vacation-request.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationRequestComponent {
	public readonly vacations: IVacation[] = VACATION.filter(
		(vacation) => vacation.employee === EMPLOYEE_MOCK[0],
	);
	public readonly VacationRequest = VacationRequest;
	public readonly dayInMiliseconds = 3600 * 24 * 1000;
}
