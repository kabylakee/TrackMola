import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {Role} from 'src/app/entities/enums/role.enum';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';

@Component({
	selector: 'app-export-form',
	templateUrl: './export-form.component.html',
	styleUrls: ['./export-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportFormComponent {
	public exportForm: FormGroup;

	public readonly allCTO: IEmployee[] = EMPLOYEE_MOCK.filter(
		(employee) => employee.role === Role.CTO,
	);
	public currentCTO: IEmployee = this.allCTO[0];

	constructor(
		private dialogRef: MatDialogRef<ExportFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: object,
	) {
		this.exportForm = new FormGroup({
			dateFrom: new FormControl(''),
			dateTo: new FormControl(''),
		});
	}

	public selectCTO(value: Event): void {
		this.allCTO.forEach((cto) => {
			if (cto.userName === `${value}`) {
				this.currentCTO = cto;
			}
		});
	}
}
