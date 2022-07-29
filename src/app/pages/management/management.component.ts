import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-management',
	templateUrl: './management.component.html',
	styleUrls: ['./management.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent {}
