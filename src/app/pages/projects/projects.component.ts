import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
	public readonly title =
		RouterPaths.Projects.charAt(0).toUpperCase() + RouterPaths.Projects.slice(1);
}
