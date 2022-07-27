import {UsersColumnType} from '../enums/column-type.enum';
import {ITableColumn} from '../interfaces/table-column.interface';

export const USERS_TABLE_CONFIG: ITableColumn[] = [
	{
		id: '0',
		type: UsersColumnType.USER,
		cls: 'users-column',
		title: 'Users',
		field: 'userName',
	},
	{
		id: '1',
		type: UsersColumnType.EMAIL,
		cls: 'email-column',
		title: 'Email',
		field: 'email',
	},
	{
		id: '2',
		type: UsersColumnType.ROLE,
		cls: 'role-column',
		title: 'Role',
		field: 'role',
	},
	{
		id: '3',
		type: UsersColumnType.DEPARTMENT,
		cls: 'department-column',
		title: 'Department',
		field: 'department',
	},
	{
		id: '4',
		type: UsersColumnType.PROJECT,
		cls: 'project-column',
		title: 'Project',
		field: 'projects',
	},
	{
		id: '5',
		type: UsersColumnType.OFFICE,
		cls: 'office-column',
		title: 'Office',
		field: 'office',
	},
	{
		id: '6',
		type: UsersColumnType.OPTIONS,
		cls: 'options-column',
		title: 'Options',
		field: 'options',
	},
];
