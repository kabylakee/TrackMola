import {ViewPeriod} from '../interfaces/view-period';
import {Period} from '../enums/period.enum';

export const TOGGLE: ViewPeriod<Period>[] = [
	{
		title: 'Day',
		mode: Period.Day,
	},
	{
		title: 'Week',
		mode: Period.Week,
	},
	{
		title: 'Month',
		mode: Period.Month,
	},
];
