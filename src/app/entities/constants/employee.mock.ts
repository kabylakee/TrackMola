import {Role} from '../enums/role.enum';
import {IEmployee} from '../interfaces/employee.interface';
import {PROJECT_MOCK} from './project.mock';

export const EMPLOYEE_MOCK: IEmployee[] = [
	{
		firstName: 'Disarae',
		secondName: 'Workman',
		projects: [PROJECT_MOCK[0]],
		role: Role.ADMIN,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Emery',
		secondName: 'Vetrovs',
		projects: [PROJECT_MOCK[0]],
		role: Role.MANGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Marilyn',
		secondName: 'Dokidis',
		projects: [PROJECT_MOCK[0]],
		role: Role.MANGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Martin',
		secondName: 'Botosh',
		projects: [PROJECT_MOCK[0]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Wilson',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Workman',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Disarae',
		secondName: 'Workman',
		projects: [PROJECT_MOCK[0]],
		role: Role.ADMIN,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Emery',
		secondName: 'Vetrovs',
		projects: [PROJECT_MOCK[0]],
		role: Role.MANGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Marilyn',
		secondName: 'Dokidis',
		projects: [PROJECT_MOCK[0]],
		role: Role.MANGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Martin',
		secondName: 'Botosh',
		projects: [PROJECT_MOCK[0]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Wilson',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Workman',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
];
