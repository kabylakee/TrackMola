import {IFilterItem} from '../interfaces/filter-item.interface';
import {OvertimeFilter} from '../enums/overtimeFilter.enum';

export const OVERTIME: IFilterItem[] = [
	{
		checked: false,
		title: OvertimeFilter.NoOvertime,
	},
	{
		checked: false,
		title: OvertimeFilter.Paid,
	},
	{
		checked: false,
		title: OvertimeFilter.Unpaid,
	},
];
