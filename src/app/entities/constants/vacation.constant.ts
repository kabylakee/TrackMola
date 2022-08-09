import {VacationRequest} from '../enums/vacation-request.enum';
import {IVacation} from '../interfaces/vacation.interface';
import * as moment from 'moment';
import {EMPLOYEE_MOCK} from './employee.mock';

export const DATE_FORMAT = 'DD.MM.YYYY';
export const VACATION: IVacation[] = [
	{
		dateFrom: new Date(2022, 5, 29),
		dateTo: new Date(2022, 6, 3),
		dateFromFormat: moment(new Date(2022, 5, 29)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 6, 3)).format(DATE_FORMAT),
		status: VacationRequest.Unapproved,
		paid: true,
		employee: EMPLOYEE_MOCK[3],
	},
	{
		dateFrom: new Date(2022, 6, 12),
		dateTo: new Date(2022, 6, 26),
		dateFromFormat: moment(new Date(2022, 6, 12)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 6, 26)).format(DATE_FORMAT),
		status: VacationRequest.Approved,
		paid: true,
		employee: EMPLOYEE_MOCK[0],
	},
	{
		dateFrom: new Date(2022, 6, 10),
		dateTo: new Date(2022, 6, 17),
		dateFromFormat: moment(new Date(2022, 6, 10)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 6, 17)).format(DATE_FORMAT),
		status: VacationRequest.Approved,
		paid: true,
		employee: EMPLOYEE_MOCK[1],
	},
	{
		dateFrom: new Date(2022, 6, 11),
		dateTo: new Date(2022, 6, 15),
		dateFromFormat: moment(new Date(2022, 6, 11)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 6, 15)).format(DATE_FORMAT),
		status: VacationRequest.Approved,
		paid: false,
		employee: EMPLOYEE_MOCK[2],
	},
	{
		dateFrom: new Date(2022, 6, 11),
		dateTo: new Date(2022, 6, 16),
		dateFromFormat: moment(new Date(2022, 6, 11)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 6, 16)).format(DATE_FORMAT),
		status: VacationRequest.Approved,
		paid: false,
		employee: EMPLOYEE_MOCK[3],
	},
	{
		dateFrom: new Date(2022, 6, 11),
		dateTo: new Date(2022, 6, 15),
		dateFromFormat: moment(new Date(2022, 6, 11)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 6, 15)).format(DATE_FORMAT),
		status: VacationRequest.Approved,
		paid: true,
		employee: EMPLOYEE_MOCK[4],
	},
	{
		dateFrom: new Date(2022, 8, 2),
		dateTo: new Date(2022, 8, 30),
		dateFromFormat: moment(new Date(2022, 8, 2)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 8, 30)).format(DATE_FORMAT),
		status: VacationRequest.Unapproved,
		paid: false,
		employee: EMPLOYEE_MOCK[0],
	},
	{
		dateFrom: new Date(2022, 11, 9),
		dateTo: new Date(2022, 11, 23),
		dateFromFormat: moment(new Date(2022, 11, 9)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 11, 23)).format(DATE_FORMAT),
		status: VacationRequest.Unapproved,
		paid: false,
		employee: EMPLOYEE_MOCK[0],
	},
];
