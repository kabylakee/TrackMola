import {AdminTabsTitle} from '../enums/tabs.enum';
import {IViewPeriod} from '../interfaces/view-period.interface';

export const ADMIN_TABS: IViewPeriod<AdminTabsTitle>[] = [
	{
		title: 'Production calendar',
		mode: AdminTabsTitle.Calendar,
		icon: 'calendar_today',
	},
	{
		title: 'Users',
		mode: AdminTabsTitle.Users,
		icon: 'groups',
	},
];
