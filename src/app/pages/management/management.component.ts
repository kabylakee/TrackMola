import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';

@Component({
	selector: 'app-management',
	templateUrl: './management.component.html',
	styleUrls: ['./management.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent {
	public readonly title =
		RouterPaths.Management.charAt(0).toUpperCase() + RouterPaths.Management.slice(1);
}
