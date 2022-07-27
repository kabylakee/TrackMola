import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import {UsersColumnType} from '../../../entities/enums/column-type.enum';
import {ITableColumn} from '../../../entities/interfaces/table-column.interface';
import {IEmployee} from '../../../entities/interfaces/employee.interface';
import {IProject} from '../../../entities/interfaces/project.interface';
import {PROJECT_MOCK} from '../../../entities/constants/project.mock';
import {CountryEnum} from '../../../entities/enums/country.enum';
import {DepartmentEnum} from '../../../entities/enums/department.enum';
import {Role} from '../../../entities/enums/role.enum';

@Component({
	selector: 'app-users-table',
	templateUrl: './users-table.component.html',
	styleUrls: ['./users-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent implements OnInit {
	@Input() public dataSource: IEmployee[] = [];
	@Input() public columns: ITableColumn[] = [];

	public readonly columnType = UsersColumnType;
	public readonly projects: IProject[] = PROJECT_MOCK;
	public readonly department = DepartmentEnum;
	public readonly office = CountryEnum;
	public readonly role = Role;
	public displayedColumns: string[] = [];

	public ngOnInit(): void {
		this.displayedColumns = this.columns.map((column) => column.id);
	}

	public compareProjectObjects(o1: IProject, o2: IProject): boolean {
		return o1.title === o2.title;
	}

	public getColor(projectColor: string): {[k: string]: string} {
		return {color: `rgb(${projectColor})`, 'background-color': `rgba(${projectColor}, 0.2)`};
	}
}
