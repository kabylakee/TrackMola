import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {Period} from 'src/app/entities/enums/period.enum';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {VacationRequestFormComponent} from '../vacation-request-form/vacation-request-form.component';
import {Department} from 'src/app/entities/enums/department.enum';

@Component({
	selector: 'app-vacation-header',
	templateUrl: './vacation-header.component.html',
	styleUrls: ['./vacation-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationHeaderComponent {
	@Output() filters = {month: '', department: '', project: ''};
	@Output() changeDate = new EventEmitter<Date>();

	public departments = Object.values(Department);
	public projects: IProject[] = PROJECT_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];
	public currentDepartment: Department = Department.FE;
	public periodRange: Period = Period.Month;
	public calendarDate: Date;

	constructor(public dialog: MatDialog) {}

	public dialogOpen(): void {
		this.dialog.open(VacationRequestFormComponent, {
			position: {
				top: 'calc(50vh - 10.875 * var(--offset))',
				left: 'calc(50vw - 14.125 * var(--offset))',
			},
			data: {},
		});
	}

	public selectProject(value: Event): void {
		this.projects.forEach((project) => {
			if (project.title === `${value}`) {
				this.currentProject = project;
			}
		});
		this.filters.project = this.currentProject.title;
	}

	public selectDepartment(value: Event): void {
		this.departments.forEach((department) => {
			if (department === `${value}`) {
				this.currentDepartment = department;
			}
		});
		this.filters.department = this.currentDepartment;
	}
}
