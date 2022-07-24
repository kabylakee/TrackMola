import {Role} from '../enums/role.enum';
import {IEmployee} from '../interfaces/employee.interface';
import {PROJECT_MOCK} from './project.mock';
import {Department} from '../enums/department.enum';

export const EMPLOYEE_MOCK: IEmployee[] = [
	{
		firstName: 'Disarae',
		secondName: 'Workman',
		projects: [PROJECT_MOCK[0]],
		department: Department.BE,
		role: Role.ADMIN,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Emery',
		secondName: 'Vetrovs',
		projects: [PROJECT_MOCK[0]],
		department: Department.FE,
		role: Role.MANAGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Marilyn',
		secondName: 'Dokidis',
		projects: [PROJECT_MOCK[0]],
		department: Department.FE,
		role: Role.MANAGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Martin',
		secondName: 'Botosh',
		projects: [PROJECT_MOCK[0]],
		department: Department.DWH,
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Wilson',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		department: Department.DESIGN,
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Workman',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		department: Department.QA,
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Disarae',
		secondName: 'Workman',
		projects: [PROJECT_MOCK[0]],
		department: Department.DWH,
		role: Role.ADMIN,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Emery',
		secondName: 'Vetrovs',
		projects: [PROJECT_MOCK[0]],
		department: Department.QA,
		role: Role.MANAGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Marilyn',
		secondName: 'Dokidis',
		projects: [PROJECT_MOCK[0]],
		department: Department.BE,
		role: Role.MANAGER,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Martin',
		secondName: 'Botosh',
		projects: [PROJECT_MOCK[0]],
		department: Department.FE,
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Wilson',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		department: Department.DESIGN,
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
	{
		firstName: 'Workman',
		secondName: 'George',
		projects: [PROJECT_MOCK[0]],
		department: Department.DWH,
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
	},
];
