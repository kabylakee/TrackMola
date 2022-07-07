import {IStatus} from '../interfaces/status.interface';
import {Status} from '../enums/status.enum';

export const STATUSES: IStatus[] = [
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
