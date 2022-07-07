import {IOvertime} from '../interfaces/overtime.interface';
import {OvertimeFilter} from '../enums/overtimeFilter.enum';

export const OVERTIME: IOvertime[] = [
	{
		checked: false,
		title: OvertimeFilter.Paid,
	},
	{
		checked: false,
		title: OvertimeFilter.Unpaid,
	},
];
