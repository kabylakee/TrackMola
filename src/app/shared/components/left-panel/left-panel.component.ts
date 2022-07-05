import {ChangeDetectionStrategy, Component} from '@angular/core';

import {NAVIGATION_LINKS} from 'src/app/entities/constants/router.constants';

@Component({
	selector: 'app-left-panel',
	templateUrl: './left-panel.component.html',
	styleUrls: ['./left-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelComponent {
	public isPanelSmall = false;

	public readonly navigationLinks = NAVIGATION_LINKS;

	public switchMenuView(): void {
		this.isPanelSmall = !this.isPanelSmall;
	}
}
