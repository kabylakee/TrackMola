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
	@Output() changeSearch = new EventEmitter<string>();
	@Output() changeProject = new EventEmitter<IProject>();

	public projects: IProject[] = PROJECT_MOCK;
	public employees: IEmployee[] = EMPLOYEE_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];
	public periodRange: Period = Period.Month;
	public searchEmployee: IEmployee;

	public selectProject(value: string): void {
		this.currentProject =
			this.projects.find((project) => project.title === `${value}`) || PROJECT_MOCK[0];
		this.changeProject.emit(this.currentProject);
	}

	public searchValueChange(value: string): void {
		this.changeSearch.emit(value);
	}
}
