import {Role} from '../enums/role.enum';
import {IEmployee} from '../interfaces/employee.interface';
import {PROJECT_MOCK} from './project.mock';
import {DepartmentEnum} from '../enums/department.enum';
import {CountryEnum} from '../enums/country.enum';

export const EMPLOYEE_MOCK: IEmployee[] = [
	{
		id: 1,
		userName: 'Disarae Workman',
		projects: [PROJECT_MOCK[0], PROJECT_MOCK[1]],
		role: Role.ADMIN,
		image: 'assets/image/human.jpg',
		email: 'dworkman@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Belarus,
	},
	{
		id: 2,
		userName: 'Emery Vetrovs',
		projects: [PROJECT_MOCK[0]],
		role: Role.MANAGER,
		image: 'assets/image/human.jpg',
		email: 'evetros@datamola.com',
		department: DepartmentEnum.Design,
		office: CountryEnum.Cypris,
	},
	{
		id: 3,
		userName: 'Marilyn Dokidis',
		projects: [PROJECT_MOCK[2], PROJECT_MOCK[3]],
		role: Role.CTO,
		image: 'assets/image/human.jpg',
		email: 'mdokidis@datamola.com',
		department: DepartmentEnum.DWH,
		office: CountryEnum.USA,
	},
	{
		id: 4,
		userName: 'Dokidis Marilyn',
		projects: [PROJECT_MOCK[0], PROJECT_MOCK[1]],
		role: Role.CTO,
		image: 'assets/image/human.jpg',
		email: 'mdokidis@datamola.com',
		department: DepartmentEnum.DWH,
		office: CountryEnum.USA,
	},
	{
		id: 5,
		userName: 'Martin Botosh',
		projects: [PROJECT_MOCK[1]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
		email: 'mbotosh@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Belarus,
	},
	{
		id: 6,
		userName: 'Wilson George',
		projects: [PROJECT_MOCK[1], PROJECT_MOCK[3]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
		email: 'wgeorge@datamola.com',
		department: DepartmentEnum.QA,
		office: CountryEnum.Belarus,
	},
	{
		id: 7,
		userName: 'Workman George',
		projects: [PROJECT_MOCK[0]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
		email: 'wgeorge@datamola.com',
		department: DepartmentEnum.BE,
		office: CountryEnum.Poland,
	},
	{
		id: 8,
		userName: 'Disarae Workman',
		projects: [PROJECT_MOCK[0]],
		role: Role.ADMIN,
		image: 'assets/image/human.jpg',
		email: 'dworkman@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Poland,
	},
	{
		id: 9,
		userName: 'Emery Vetrovs',
		projects: [PROJECT_MOCK[1]],
		role: Role.MANAGER,
		image: 'assets/image/human.jpg',
		email: 'evtros@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Belarus,
	},
	{
		id: 10,
		userName: 'Marilyn Dokidis',
		projects: [PROJECT_MOCK[2]],
		role: Role.MANAGER,
		image: 'assets/image/human.jpg',
		email: 'mdokidis@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Belarus,
	},
	{
		id: 11,
		userName: 'Martin Botosh',
		projects: [PROJECT_MOCK[0], PROJECT_MOCK[1]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
		email: 'mbotosh@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Russia,
	},
	{
		id: 12,
		userName: 'Wilson George',
		projects: [PROJECT_MOCK[2]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
		email: 'wgeorge@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Russia,
	},
	{
		id: 13,
		userName: 'Workman George',
		projects: [PROJECT_MOCK[3], PROJECT_MOCK[4]],
		role: Role.EMPLOYEE,
		image: 'assets/image/human.jpg',
		email: 'wgeorge@datamola.com',
		department: DepartmentEnum.FE,
		office: CountryEnum.Belarus,
	},
];
