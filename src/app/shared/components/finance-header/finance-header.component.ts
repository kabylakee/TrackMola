import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {FINANCE_EXCEL_COLUMNS} from 'src/app/entities/constants/excel-table.config';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {Period} from 'src/app/entities/enums/period.enum';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {IFinanceExcelData} from 'src/app/entities/interfaces/excel-data.interface';
import {IFinance} from 'src/app/entities/interfaces/finance.interface';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {ExcelService} from '../../services/excel.service';

@Component({
	selector: 'app-finance-header',
	templateUrl: './finance-header.component.html',
	styleUrls: ['./finance-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceHeaderComponent {
	@Input() finances: IFinance[];

	@Output() changeDate = new EventEmitter<Date>();
	@Output() changeSearch = new EventEmitter<string>();
	@Output() changeProject = new EventEmitter<IProject>();

	public projects: IProject[] = PROJECT_MOCK;
	public employees: IEmployee[] = EMPLOYEE_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];
	public periodRange: Period = Period.Month;
	public searchEmployee: IEmployee;

	// Export table
	private excelConfig: string[] = FINANCE_EXCEL_COLUMNS;
	private excelData: IFinanceExcelData[] = [];

	constructor(private excelService: ExcelService) {}

	public selectProject(value: string): void {
		this.currentProject =
			this.projects.find((project) => project.title === `${value}`) || PROJECT_MOCK[0];
		this.changeProject.emit(this.currentProject);
	}

	public searchValueChange(value: string): void {
		this.changeSearch.emit(value);
	}

	public onExportClick(): void {
		this.finances.map((raw) => {
			const newRaw: IFinanceExcelData = {
				name: raw.employee.userName,
				rate: `${raw.rate}`,
				role: raw.employee.role,
				salaryWO: `${+raw.rate * 168}`,
				salaryW: '',
			};
			this.excelData.push(newRaw);
		});
		this.excelService.exportManagement(
			this.excelConfig,
			this.excelData,
			'FinanceReport',
			`Report for the customer`,
		);
	}
}
