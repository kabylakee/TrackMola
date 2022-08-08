import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {Period} from 'src/app/entities/enums/period.enum';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {IProject} from 'src/app/entities/interfaces/project.interface';

@Component({
	selector: 'app-finance-header',
	templateUrl: './finance-header.component.html',
	styleUrls: ['./finance-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceHeaderComponent {
	@Output() changeDate = new EventEmitter<Date>();

	public projects: IProject[] = PROJECT_MOCK;
	public employees: IEmployee[] = EMPLOYEE_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];
	public periodRange: Period = Period.Month;
	public searchEmployee: IEmployee;

	public selectProject(value: Event): void {
		this.projects.forEach((project) => {
			if (project.title === `${value}`) {
				this.currentProject = project;
			}
		});

		// this.filters.project = this.currentProject.title;
		// this.changeFilters.emit(this.filters);
	}

	// public searchValueChange(value: string): void {
		// this.filters.project = this.currentProject.title;
		// this.changeFilters.emit(this.filters);
	// }
}
