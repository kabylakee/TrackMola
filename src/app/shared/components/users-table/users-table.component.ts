import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import {UsersColumnType} from '../../../entities/enums/column-type.enum';
import {ITableColumn} from '../../../entities/interfaces/table-column.interface';
import {IEmployee} from '../../../entities/interfaces/employee.interface';
import {IProject} from '../../../entities/interfaces/project.interface';
import {PROJECT_MOCK} from '../../../entities/constants/project.mock';
import {CountryEnum} from '../../../entities/enums/country.enum';
import {DepartmentEnum} from '../../../entities/enums/department.enum';
import {Role} from '../../../entities/enums/role.enum';
import {AdminButtonsEnum} from '../../../entities/enums/admin-buttons.enum';
import {UsersService} from '../../services/users.service';

@Component({
	selector: 'app-users-table',
	templateUrl: './users-table.component.html',
	styleUrls: ['./users-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent implements OnInit, OnChanges {
	@Input() public dataSource: IEmployee[] = [];
	@Input() public columns: ITableColumn[] = [];
	@Input() public searchValue = '';
	@Input() public adminButtonAction: AdminButtonsEnum;
	@Input() public selectedProject: string;

	public readonly columnType = UsersColumnType;
	public filteredDataSource: IEmployee[] = [];
	public readonly projects: IProject[] = PROJECT_MOCK;
	public readonly departments = Object.keys(DepartmentEnum);
	public readonly offices = Object.keys(CountryEnum);
	public readonly roles = Object.values(Role);
	public displayedColumns: string[] = [];

	constructor(private cd: ChangeDetectorRef, private usersService: UsersService) {}
	public ngOnInit(): void {
		this.displayedColumns = this.columns.map((column) => column.id);
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.searchValue) {
			this.searchUserName();
		}
		if (changes.adminButtonAction && changes.adminButtonAction.currentValue) {
			this.handingAdminButtons(this.adminButtonAction);
		}
		if (changes.selectedProject && this.selectedProject) {
			this.changeSelectedProject();
		}
	}

	public handingAdminButtons(btn: AdminButtonsEnum): void {
		if (btn === AdminButtonsEnum.AddUser) {
			const defaultProject: IProject = PROJECT_MOCK[0];
			const newUser: IEmployee = {
				userName: '',
				projects: [defaultProject],
				role: Role.EMPLOYEE,
				email: '',
				department: DepartmentEnum.FE,
				office: CountryEnum.Belarus,
				isNew: true,
			};
			this.dataSource = [...this.dataSource, newUser];
			this.filteredDataSource = this.dataSource;
			this.cd.detectChanges();
			return;
		}
		if (btn === AdminButtonsEnum.Save) {
			const filteredUsers = this.filteredDataSource.filter((user) => user.isNew);
			this.usersService.saveState(filteredUsers);
			return;
		}
	}

	public compareProjectObjects(o1: IProject, o2: IProject): boolean {
		return o1.title === o2.title;
	}

	public getColor(projectColor: string): {[k: string]: string} {
		return {color: `rgb(${projectColor})`, 'background-color': `rgba(${projectColor}, 0.2)`};
	}

	public searchUserName(): void {
		this.filteredDataSource = this.dataSource.filter((user) => {
			return user.userName.toLowerCase().includes(this.searchValue.toLowerCase());
		});
		if (this.searchValue === '') {
			this.filteredDataSource = this.dataSource;
		}
	}

	public onDeleteBtn(element: IEmployee): void {
		const userIndex = this.dataSource.findIndex((user) => {
			return JSON.stringify(user) === JSON.stringify(element);
		});
		if (userIndex !== -1) {
			this.dataSource.splice(userIndex, 1);
			this.filteredDataSource = [...this.dataSource];
			this.cd.detectChanges();
		}
	}

	public changeSelectedProject(): void {
		this.filteredDataSource = this.dataSource.filter((user) => {
			return user.projects.find((project) => {
				return project.title === this.selectedProject;
			});
		});
		if (this.selectedProject === 'Select All') {
			this.filteredDataSource = this.dataSource;
		}
	}
}
