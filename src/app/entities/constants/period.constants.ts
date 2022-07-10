import {IViewPeriod} from '../interfaces/view-period.interface';
import {Period} from '../enums/period.enum';

export const TOGGLE: IViewPeriod<Period>[] = [
	{
		title: 'Day',
		mode: Period.Day,
	},
	{
		title: 'Month',
		mode: Period.Month,
	},
];
