import {VacationRequest} from '../enums/vacation-request.enum';
import {IVacation} from '../interfaces/vacation.interface';
import * as moment from 'moment';

export const DATE_FORMAT = 'DD.MM.YYYY';
export const VACATION: IVacation[] = [
	{
		dateFrom: new Date(2022, 6, 12),
		dateTo: new Date(2022, 6, 26),
		dateFromFormat: moment(new Date(2022, 7, 12)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 7, 25)).format(DATE_FORMAT),
		status: VacationRequest.Approved,
	},
	{
		dateFrom: new Date(2022, 8, 2),
		dateTo: new Date(2022, 8, 30),
		dateFromFormat: moment(new Date(2022, 9, 13)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 9, 30)).format(DATE_FORMAT),
		status: VacationRequest.Unapproved,
	},
	{
		dateFrom: new Date(2022, 11, 9),
		dateTo: new Date(2022, 11, 23),
		dateFromFormat: moment(new Date(2022, 11, 10)).format(DATE_FORMAT),
		dateToFormat: moment(new Date(2022, 11, 23)).format(DATE_FORMAT),
		status: VacationRequest.Unapproved,
	},
];
