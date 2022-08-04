import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {Period} from 'src/app/entities/enums/period.enum';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {IProject} from 'src/app/entities/interfaces/project.interface';

@Component({
	selector: 'app-vacation-request-header',
	templateUrl: './vacation-request-header.component.html',
	styleUrls: ['./vacation-request-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationRequestHeaderComponent {
	// @Output() changeDate = new EventEmitter<Date>();
	@Output() changeSearchValue = new EventEmitter<string>();
	@Output() changeProject = new EventEmitter<IProject>();

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

		this.changeProject.emit(this.currentProject);
	}
}
