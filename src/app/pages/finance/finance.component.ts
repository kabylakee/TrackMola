import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FINANCE_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {FINANCE_EXCEL_COLUMNS} from 'src/app/entities/constants/excel-table.config';
import {DepartmentEnum} from 'src/app/entities/enums/department.enum';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {IFinanceExcelData} from 'src/app/entities/interfaces/excel-data.interface';
import {IFinance} from 'src/app/entities/interfaces/finance.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ExcelService} from 'src/app/shared/services/excel.service';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceComponent {
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

	// Export table
	private excelConfig: string[] = FINANCE_EXCEL_COLUMNS;
	private excelData: IFinanceExcelData[] = [];

	public readonly title =
		RouterPaths.Finance.charAt(0).toUpperCase() + RouterPaths.Finance.slice(1);

	constructor(private excelService: ExcelService) {}

	public onExportClick(): void {
		this.finances.map((raw) => {
			const newRaw: IFinanceExcelData = {
				name: raw.employee.userName,
				rate: raw.rate,
				role: raw.employee.role,
				salaryW: '',
				salaryWO: `${+raw.rate * 168}`,
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
