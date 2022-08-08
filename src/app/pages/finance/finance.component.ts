import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FINANCE_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {DepartmentEnum} from 'src/app/entities/enums/department.enum';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {IFinance} from 'src/app/entities/interfaces/finance.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceComponent {
	// Finance table
	public finances: IFinance[] = [];
	public columns: ITableColumn[] = [];

	public DepartmentEnum = DepartmentEnum;

	public readonly title =
		RouterPaths.Finance.charAt(0).toUpperCase() + RouterPaths.Finance.slice(1);

	constructor() {
		this.columns = FINANCE_TABLE_CONFIG;
		this.finances = [
			{
				checked: false,
				dateStart: '12.12.12',
				department: DepartmentEnum.FE,
				employee: EMPLOYEE_MOCK[0],
				grossSalary: '1000',
				percent: '50',
				rate: '10',
				salaryReview: '12.12.12',
				time: '4',
				totalTime: '8',
			},
		];
	}
}
