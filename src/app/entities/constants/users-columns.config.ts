import {UsersColumnType} from '../enums/column-type.enum';
import {ITableColumn} from '../interfaces/table-column.interface';
import {ClsType} from '../enums/cls-type.enum';

export const USERS_TABLE_CONFIG: ITableColumn[] = [
	{
		id: '0',
		type: UsersColumnType.USER,
		cls: ClsType.UsersColumn,
		title: 'Users',
		field: 'userName',
	},
	{
		id: '1',
		type: UsersColumnType.EMAIL,
		cls: ClsType.EmailColumn,
		title: 'Email',
		field: 'email',
	},
	{
		id: '2',
		type: UsersColumnType.ROLE,
		cls: ClsType.RoleColumn,
		title: 'Role',
		field: 'role',
	},
	{
		id: '3',
		type: UsersColumnType.DEPARTMENT,
		cls: ClsType.DepartmentColumn,
		title: 'Department',
		field: 'department',
	},
	{
		id: '4',
		type: UsersColumnType.PROJECT,
		cls: ClsType.ProjectColumn,
		title: 'Project',
		field: 'projects',
	},
	{
		id: '5',
		type: UsersColumnType.OFFICE,
		cls: ClsType.OfficeColumn,
		title: 'Office',
		field: 'office',
	},
	{
		id: '6',
		type: UsersColumnType.OPTIONS,
		cls: ClsType.OptionsColumn,
		title: 'Options',
		field: 'options',
	},
];
