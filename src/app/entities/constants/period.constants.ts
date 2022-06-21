import {ViewPeriod} from '../interfaces/view-period';
import {Period} from '../enums/period.enum';

export const TOGGLE: ViewPeriod[] = [
	{
		title: Period.Day,
		mode: 'ViewMode',
	},
	{
		title: Period.Week,
		mode: 'ViewMode',
	},
	{
		title: Period.Month,
		mode: 'ViewMode',
	},
];
