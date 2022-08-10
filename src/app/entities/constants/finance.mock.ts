import {PeriodHelper} from 'src/app/shared/helpers/PeriodHelper.helper';
import {IFinance} from '../interfaces/finance.interface';
import {EMPLOYEE_MOCK} from './employee.mock';

export const FINANCE_MOCKS: IFinance[] = [
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[0].dateStart),
		department: EMPLOYEE_MOCK[0].department,
		employee: EMPLOYEE_MOCK[0],
		grossSalary: '3360',
		percent: '100',
		rate: EMPLOYEE_MOCK[0].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[0].salaryReview),
		time: '168',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[1].dateStart),
		department: EMPLOYEE_MOCK[1].department,
		employee: EMPLOYEE_MOCK[1],
		grossSalary: '2520',
		percent: '100',
		rate: EMPLOYEE_MOCK[1].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[1].salaryReview),
		time: '168',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[2].dateStart),
		department: EMPLOYEE_MOCK[2].department,
		employee: EMPLOYEE_MOCK[2],
		grossSalary: '5040',
		percent: '50',
		rate: EMPLOYEE_MOCK[2].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[2].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[3].dateStart),
		department: EMPLOYEE_MOCK[3].department,
		employee: EMPLOYEE_MOCK[3],
		grossSalary: '5040',
		percent: '50',
		rate: EMPLOYEE_MOCK[3].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[3].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[4].dateStart),
		department: EMPLOYEE_MOCK[4].department,
		employee: EMPLOYEE_MOCK[4],
		grossSalary: '420',
		percent: '100',
		rate: EMPLOYEE_MOCK[4].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[4].salaryReview),
		time: '84',
		totalTime: '84',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[5].dateStart),
		department: EMPLOYEE_MOCK[5].department,
		employee: EMPLOYEE_MOCK[5],
		grossSalary: '840',
		percent: '50',
		rate: EMPLOYEE_MOCK[5].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[5].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[6].dateStart),
		department: EMPLOYEE_MOCK[6].department,
		employee: EMPLOYEE_MOCK[6],
		grossSalary: '420',
		percent: '50',
		rate: EMPLOYEE_MOCK[6].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[6].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[7].dateStart),
		department: EMPLOYEE_MOCK[7].department,
		employee: EMPLOYEE_MOCK[7],
		grossSalary: '3360',
		percent: '50',
		rate: EMPLOYEE_MOCK[7].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[7].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[8].dateStart),
		department: EMPLOYEE_MOCK[8].department,
		employee: EMPLOYEE_MOCK[8],
		grossSalary: '3360',
		percent: '25',
		rate: EMPLOYEE_MOCK[8].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[8].salaryReview),
		time: '42',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[9].dateStart),
		department: EMPLOYEE_MOCK[9].department,
		employee: EMPLOYEE_MOCK[9],
		grossSalary: '3360',
		percent: '50',
		rate: EMPLOYEE_MOCK[9].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[9].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[10].dateStart),
		department: EMPLOYEE_MOCK[10].department,
		employee: EMPLOYEE_MOCK[10],
		grossSalary: '1680',
		percent: '50',
		rate: 1,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[10].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[11].dateStart),
		department: EMPLOYEE_MOCK[11].department,
		employee: EMPLOYEE_MOCK[11],
		grossSalary: '3360',
		percent: '75',
		rate: EMPLOYEE_MOCK[11].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[11].salaryReview),
		time: '126',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[12].dateStart),
		department: EMPLOYEE_MOCK[12].department,
		employee: EMPLOYEE_MOCK[12],
		grossSalary: '3360',
		percent: '50',
		rate: EMPLOYEE_MOCK[12].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[12].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 5, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[0].dateStart),
		department: EMPLOYEE_MOCK[0].department,
		employee: EMPLOYEE_MOCK[0],
		grossSalary: '3360',
		percent: '25',
		rate: EMPLOYEE_MOCK[0].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[0].salaryReview),
		time: '42',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[1].dateStart),
		department: EMPLOYEE_MOCK[1].department,
		employee: EMPLOYEE_MOCK[1],
		grossSalary: '2520',
		percent: '75',
		rate: EMPLOYEE_MOCK[1].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[1].salaryReview),
		time: '126',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[2].dateStart),
		department: EMPLOYEE_MOCK[2].department,
		employee: EMPLOYEE_MOCK[2],
		grossSalary: '5040',
		percent: '75',
		rate: EMPLOYEE_MOCK[2].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[2].salaryReview),
		time: '126',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[3].dateStart),
		department: EMPLOYEE_MOCK[3].department,
		employee: EMPLOYEE_MOCK[3],
		grossSalary: '5040',
		percent: '100',
		rate: EMPLOYEE_MOCK[3].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[3].salaryReview),
		time: '168',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[4].dateStart),
		department: EMPLOYEE_MOCK[4].department,
		employee: EMPLOYEE_MOCK[4],
		grossSalary: '420',
		percent: '50',
		rate: EMPLOYEE_MOCK[4].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[4].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[5].dateStart),
		department: EMPLOYEE_MOCK[5].department,
		employee: EMPLOYEE_MOCK[5],
		grossSalary: '840',
		percent: '75',
		rate: EMPLOYEE_MOCK[5].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[5].salaryReview),
		time: '126',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[6].dateStart),
		department: EMPLOYEE_MOCK[6].department,
		employee: EMPLOYEE_MOCK[6],
		grossSalary: '420',
		percent: '50',
		rate: EMPLOYEE_MOCK[6].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[6].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[7].dateStart),
		department: EMPLOYEE_MOCK[7].department,
		employee: EMPLOYEE_MOCK[7],
		grossSalary: '3360',
		percent: '25',
		rate: EMPLOYEE_MOCK[7].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[7].salaryReview),
		time: '42',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[8].dateStart),
		department: EMPLOYEE_MOCK[8].department,
		employee: EMPLOYEE_MOCK[8],
		grossSalary: '3360',
		percent: '75',
		rate: EMPLOYEE_MOCK[8].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[8].salaryReview),
		time: '126',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[9].dateStart),
		department: EMPLOYEE_MOCK[9].department,
		employee: EMPLOYEE_MOCK[9],
		grossSalary: '3360',
		percent: '50',
		rate: EMPLOYEE_MOCK[9].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[9].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[10].dateStart),
		department: EMPLOYEE_MOCK[10].department,
		employee: EMPLOYEE_MOCK[10],
		grossSalary: '1680',
		percent: '50',
		rate: EMPLOYEE_MOCK[10].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[10].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[11].dateStart),
		department: EMPLOYEE_MOCK[11].department,
		employee: EMPLOYEE_MOCK[11],
		grossSalary: '3360',
		percent: '100',
		rate: EMPLOYEE_MOCK[11].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[11].salaryReview),
		time: '168',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[12].dateStart),
		department: EMPLOYEE_MOCK[12].department,
		employee: EMPLOYEE_MOCK[12],
		grossSalary: '3360',
		percent: '75',
		rate: EMPLOYEE_MOCK[12].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[12].salaryReview),
		time: '126',
		totalTime: '168',
		date: new Date(2022, 7, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[0].dateStart),
		department: EMPLOYEE_MOCK[0].department,
		employee: EMPLOYEE_MOCK[0],
		grossSalary: '3360',
		percent: '100',
		rate: EMPLOYEE_MOCK[0].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[0].salaryReview),
		time: '168',
		totalTime: '168',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[1].dateStart),
		department: EMPLOYEE_MOCK[1].department,
		employee: EMPLOYEE_MOCK[1],
		grossSalary: '2520',
		percent: '50',
		rate: EMPLOYEE_MOCK[1].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[1].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[2].dateStart),
		department: EMPLOYEE_MOCK[2].department,
		employee: EMPLOYEE_MOCK[2],
		grossSalary: '2520',
		percent: '100',
		rate: EMPLOYEE_MOCK[2].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[2].salaryReview),
		time: '84',
		totalTime: '84',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[3].dateStart),
		department: EMPLOYEE_MOCK[3].department,
		employee: EMPLOYEE_MOCK[3],
		grossSalary: '2520',
		percent: '100',
		rate: EMPLOYEE_MOCK[3].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[3].salaryReview),
		time: '84',
		totalTime: '84',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[4].dateStart),
		department: EMPLOYEE_MOCK[4].department,
		employee: EMPLOYEE_MOCK[4],
		grossSalary: '420',
		percent: '50',
		rate: EMPLOYEE_MOCK[4].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[4].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[5].dateStart),
		department: EMPLOYEE_MOCK[5].department,
		employee: EMPLOYEE_MOCK[5],
		grossSalary: '420',
		percent: '100',
		rate: EMPLOYEE_MOCK[5].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[5].salaryReview),
		time: '84',
		totalTime: '84',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[6].dateStart),
		department: EMPLOYEE_MOCK[6].department,
		employee: EMPLOYEE_MOCK[6],
		grossSalary: '420',
		percent: '50',
		rate: EMPLOYEE_MOCK[6].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[6].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[7].dateStart),
		department: EMPLOYEE_MOCK[7].department,
		employee: EMPLOYEE_MOCK[7],
		grossSalary: '1680',
		percent: '50',
		rate: EMPLOYEE_MOCK[7].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[7].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[8].dateStart),
		department: EMPLOYEE_MOCK[8].department,
		employee: EMPLOYEE_MOCK[8],
		grossSalary: '3360',
		percent: '25',
		rate: EMPLOYEE_MOCK[8].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[8].salaryReview),
		time: '42',
		totalTime: '168',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[9].dateStart),
		department: EMPLOYEE_MOCK[9].department,
		employee: EMPLOYEE_MOCK[9],
		grossSalary: '3360',
		percent: '75',
		rate: EMPLOYEE_MOCK[9].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[9].salaryReview),
		time: '126',
		totalTime: '168',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[10].dateStart),
		department: EMPLOYEE_MOCK[10].department,
		employee: EMPLOYEE_MOCK[10],
		grossSalary: '3360',
		percent: '50',
		rate: EMPLOYEE_MOCK[10].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[10].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[11].dateStart),
		department: EMPLOYEE_MOCK[11].department,
		employee: EMPLOYEE_MOCK[11],
		grossSalary: '3360',
		percent: '50',
		rate: EMPLOYEE_MOCK[11].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[11].salaryReview),
		time: '84',
		totalTime: '168',
		date: new Date(2022, 6, 1),
	},
	{
		checked: false,
		dateStart: PeriodHelper.transpormDate(EMPLOYEE_MOCK[12].dateStart),
		department: EMPLOYEE_MOCK[12].department,
		employee: EMPLOYEE_MOCK[12],
		grossSalary: '1680',
		percent: '50',
		rate: EMPLOYEE_MOCK[12].rate,
		salaryReview: PeriodHelper.transpormDate(EMPLOYEE_MOCK[12].salaryReview),
		time: '42',
		totalTime: '84',
		date: new Date(2022, 6, 1),
	},
];