import {VacationTab} from '../enums/vacation-tab.enum';
import {IVacationTab} from '../interfaces/vacation-tab.interface';

export const VACATION_TABS: IVacationTab[] = [
	{
		title: VacationTab.Personal,
		icon: 'account_circle',
	},
	{
		title: VacationTab.MyTeam,
		icon: 'groups',
	},
	{
		title: VacationTab.Requests,
		icon: 'manage_accounts',
	},
];
