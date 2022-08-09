import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {Period} from 'src/app/entities/enums/period.enum';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {VacationRequestFormComponent} from '../vacation-request-form/vacation-request-form.component';
import {DepartmentEnum} from 'src/app/entities/enums/department.enum';
import {IVacationFilter} from 'src/app/entities/interfaces/vacation-filter.interface';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {IVacationTab} from 'src/app/entities/interfaces/vacation-tab.interface';
import {VACATION_TABS} from 'src/app/entities/constants/vacation-tab.constants';

@Component({
	selector: 'app-vacation-header',
	templateUrl: './vacation-header.component.html',
	styleUrls: ['./vacation-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationHeaderComponent {
	@Input() public periodRange: Period;

	@Output() changeDate = new EventEmitter<Date>();
	@Output() changeFilters = new EventEmitter<IVacationFilter>();
	@Output() vacationRequest = new EventEmitter<IVacation>();
	@Output() tabSelected = new EventEmitter<IVacationTab>();

	public filters: IVacationFilter = {project: '', department: ''};
	public departments = Object.values(DepartmentEnum);
	public projects: IProject[] = PROJECT_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];
	public currentDepartment = 'Select all';
	public tab: IVacationTab = VACATION_TABS[1];

	constructor(public dialog: MatDialog) {
		this.filters.department = this.currentDepartment;
		this.filters.project = this.currentProject.title;
	}

	public dialogOpen(): void {
		const dialogRef = this.dialog.open(VacationRequestFormComponent, {
			position: {
				top: 'calc(50vh - 10.875 * var(--offset))',
				left: 'calc(50vw - 14.125 * var(--offset))',
			},
			data: {},
		});
		dialogRef.afterClosed().subscribe((data) => {
			this.vacationRequest.emit(data);
		});
	}

	public selectProject(value: Event): void {
		this.projects.forEach((project) => {
			if (project.title === `${value}`) {
				this.currentProject = project;
			}
		});
		this.filters.project = this.currentProject.title;
		this.changeFilters.emit(this.filters);
	}

	public selectDepartment(value: Event): void {
		if (value + '' === 'Select all') {
			this.currentDepartment = value + '';
		} else {
			this.departments.forEach((department) => {
				if (department === `${value}`) {
					this.currentDepartment = department;
				}
			});
		}
		this.filters.department = this.currentDepartment;
		this.changeFilters.emit(this.filters);
	}

	public changeTab(event: IVacationTab): void {
		this.tab = event;
		this.tabSelected.emit(event);
	}
}
