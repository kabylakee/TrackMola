import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FINANCE_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {DepartmentEnum} from 'src/app/entities/enums/department.enum';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {IFinance} from 'src/app/entities/interfaces/finance.interface';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceComponent {
	public selectedDate: Date;
	public selectedProject: IProject = PROJECT_MOCK[0];
	public searchValue = '';

	// Finance table
	public finances: IFinance[] = [
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
	public columns: ITableColumn[] = FINANCE_TABLE_CONFIG;

	public DepartmentEnum = DepartmentEnum;

	public readonly title =
		RouterPaths.Finance.charAt(0).toUpperCase() + RouterPaths.Finance.slice(1);

	public onChangeDate(date: Date): void {
		this.selectedDate = date;
	}
	public onChangeProject(project: IProject): void {
		this.selectedProject = project;
	}
	public onChangeSearch(value: string): void {
		this.searchValue = value;
	}
}
