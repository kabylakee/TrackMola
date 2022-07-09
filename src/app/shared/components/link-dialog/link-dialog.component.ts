import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-link-dialog',
	templateUrl: './link-dialog.component.html',
	styleUrls: ['./link-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkDialogComponent {}
