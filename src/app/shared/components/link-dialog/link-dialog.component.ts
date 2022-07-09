import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-link-dialog',
	templateUrl: './link-dialog.component.html',
	styleUrls: ['./link-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkDialogComponent {
	public asanaLink: string = '';
	public asanaActive: string = '';
	public bitbucketLink: string = '';
	public bitbucketActive: string = '';

	public asanaUpdate() {
		this.asanaActive = this.asanaLink ? 'active' : '';
	}

	public bitbucketUpdate() {
		this.bitbucketActive = this.bitbucketLink ? 'active' : '';
	}
}
