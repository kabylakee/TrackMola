import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ILinks} from 'src/app/entities/interfaces/links.interface';

@Component({
	selector: 'app-link-dialog',
	templateUrl: './link-dialog.component.html',
	styleUrls: ['./link-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkDialogComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: ILinks) {}
}
