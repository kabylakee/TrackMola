import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeyValue} from '@angular/common';

import {NAVIGATION_LINKS} from 'src/app/entities/constants/router.constants';

@Component({
	selector: 'app-left-panel',
	templateUrl: './left-panel.component.html',
	styleUrls: ['./left-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelComponent {
	public isPanelSmall = true;

	public readonly navigationLinks = NAVIGATION_LINKS;

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
