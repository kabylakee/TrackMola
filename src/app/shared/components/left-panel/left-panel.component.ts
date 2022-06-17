import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeyValue} from '@angular/common';

import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {NavigationIcons} from 'src/app/entities/enums/nav-icon.enum';

@Component({
	selector: 'app-left-panel',
	templateUrl: './left-panel.component.html',
	styleUrls: ['./left-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelComponent {
	public isPanelSmall = true;

	public readonly navigationLinks = [
		{
			path: RouterPaths.Dashboard,
			icon: NavigationIcons.Dashboard,
		},
		{
			path: RouterPaths.Projects,
			icon: NavigationIcons.Projects,
		},
		{
			path: RouterPaths.Reports,
			icon: NavigationIcons.Reports,
		},
		{
			path: RouterPaths.Vacation,
			icon: NavigationIcons.Vacation,
		},
		{
			path: RouterPaths.Statistic,
			icon: NavigationIcons.Statistic,
		},
		{
			path: RouterPaths.Finance,
			icon: NavigationIcons.Finance,
		},
		{
			path: RouterPaths.Settings,
			icon: NavigationIcons.Settings,
		},
	];

	public originalOrderComparator = (
		a: KeyValue<string, string>,
		b: KeyValue<string, string>,
	): number => {
		return 0;
	};

	public switchMenuView(): void {
		this.isPanelSmall = !this.isPanelSmall;
	}
}
