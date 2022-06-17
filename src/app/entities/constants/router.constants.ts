import {RouterPaths, NavigationIcons} from '../enums/router.enum';

export const NAVIGATION_LINKS = [
	{
		path: RouterPaths.Dashboard,
		title: RouterPaths.Dashboard[0].toUpperCase() + RouterPaths.Dashboard.slice(1),
		icon: NavigationIcons.Dashboard,
	},
	{
		path: RouterPaths.Projects,
		title: RouterPaths.Projects[0].toUpperCase() + RouterPaths.Projects.slice(1),
		icon: NavigationIcons.Projects,
	},
	{
		path: RouterPaths.Reports,
		title: RouterPaths.Reports[0].toUpperCase() + RouterPaths.Reports.slice(1),
		icon: NavigationIcons.Reports,
	},
	{
		path: RouterPaths.Vacation,
		title: RouterPaths.Vacation[0].toUpperCase() + RouterPaths.Vacation.slice(1),
		icon: NavigationIcons.Vacation,
	},
	{
		path: RouterPaths.Statistic,
		title: RouterPaths.Statistic[0].toUpperCase() + RouterPaths.Statistic.slice(1),
		icon: NavigationIcons.Statistic,
	},
	{
		path: RouterPaths.Finance,
		title: RouterPaths.Finance[0].toUpperCase() + RouterPaths.Finance.slice(1),
		icon: NavigationIcons.Finance,
	},
	{
		path: RouterPaths.Settings,
		title: RouterPaths.Settings[0].toUpperCase() + RouterPaths.Settings.slice(1),
		icon: NavigationIcons.Settings,
	},
];
