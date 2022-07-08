import {IFilterItem} from '../interfaces/filter-item.interface';
import {Status} from '../enums/status.enum';

export const STATUSES: IFilterItem[] = [
	{
		checked: false,
		title: Status.Done,
	},
	{
		checked: false,
		title: Status.InProgress,
	},
	{
		checked: false,
		title: Status.OnHold,
	},
];
