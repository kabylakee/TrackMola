import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {MANAGEMENT_EXCEL_COLUMNS} from 'src/app/entities/constants/excel-table.config';
import {Role} from 'src/app/entities/enums/role.enum';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {IManagementExcelData} from 'src/app/entities/interfaces/excel-data.interface';
import {DateTransformHelper} from '../../helpers/date-transform.helper';
import {ExcelService} from '../../services/excel.service';
import {ManagementRequestsService} from '../../services/management-requests.service';

@Component({
	selector: 'app-export-form',
	templateUrl: './export-form.component.html',
	styleUrls: ['./export-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportFormComponent {
	public exportForm: FormGroup;
	public message: string;

	public readonly allCTO: IEmployee[] = EMPLOYEE_MOCK.filter(
		(employee) => employee.role === Role.CTO,
	);
	public currentCTO: IEmployee = this.allCTO[0];

	private exportData: IManagementExcelData[];
	private readonly exportConfig = MANAGEMENT_EXCEL_COLUMNS;

	constructor(
		private excelService: ExcelService,
		private requestsService: ManagementRequestsService,
		private dialogRef: MatDialogRef<ExportFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
	) {
		this.exportForm = new FormGroup(
			{
				dateFrom: new FormControl(''),
				dateTo: new FormControl(''),
				ctoName: new FormControl(''),
			},
			{
				validators: this.formValidator,
			},
		);
		this.exportForm.controls.ctoName.setValue(this.currentCTO.userName);
	}

	public selectCTO(value: Event): void {
		this.currentCTO = this.allCTO.find((cto) => cto.userName === `${value}`)!;
	}

	public onExport(): void {
		if (
			!this.exportForm.controls.dateFrom.valid ||
			!this.exportForm.controls.dateTo.valid ||
			!this.exportForm.valid
		) {
			this.message = 'Date is invalid';
			return;
		}

		this.requestsService
			.getExportRequests(
				this.exportForm.controls.dateFrom.value,
				this.exportForm.controls.dateTo.value,
				this.exportForm.controls.ctoName.value,
			)
			.subscribe(
				(requests) =>
					(this.exportData = requests.map((request) => {
						return {
							date: `Week of ${DateTransformHelper.weeklyReportFormat(
								this.exportForm.controls.dateFrom.value,
							)}`,
							project: request.project.title,
							surname: request.name,
							percent: `${(request.totalHours / request.expectedHours) * 100}%`,
							workingHours: request.expectedHours + '',
							hours: request.totalHours + '',
						};
					})),
			);

		this.excelService.exportManagement(
			this.exportConfig,
			this.exportData,
			'WeeklyReport',
			`Summary week of ${DateTransformHelper.weeklyReportFormat(
				this.exportForm.controls.dateFrom.value,
			)}`,
		);
	}

	private formValidator(control: AbstractControl): ValidationErrors | null {
		if (!control.get('dateFrom')?.value || !control.get('dateTo')?.value) {
			return {error: true};
		}
		if (control.get('dateTo')?.value >= control.get('dateFrom')?.value) {
			return null;
		}
		return {error: true};
	}
}
