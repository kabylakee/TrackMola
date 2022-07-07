import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {IStatus} from 'src/app/entities/interfaces/status.interface';
import {IOvertime} from 'src/app/entities/interfaces/overtime.interface';
import {OVERTIME} from 'src/app/entities/constants/overtime.constants';
import {STATUSES} from 'src/app/entities/constants/status.constants';

@Component({
	selector: 'app-report-filter',
	templateUrl: './report-filter.component.html',
	styleUrls: ['./report-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFilterComponent {
	@Input() public projectSource: IProject[] = [];
	public statusSource: IStatus[] = Object.values(STATUSES);
	public overtimeSource: IOvertime[] = Object.values(OVERTIME);

	public filters: number = 0;

	public allStatusChecked: boolean = false;
	public allOvertimeChecked: boolean = false;
	public allProjectChecked: boolean = false;

	OnChange(type: string, checked: boolean): void {
		if (checked) {
			this.filters++;
		} else {
			this.filters--;
		}

		switch (type) {
			case 'overtime':
				this.allOvertimeChecked =
					this.overtimeSource.filter((t) => t.checked == true).length ===
					this.overtimeSource.length;
				break;

			case 'project':
				this.allProjectChecked =
					this.projectSource.filter((t) => t.checked == true).length === this.projectSource.length;
				break;

			case 'status':
				this.allStatusChecked =
					this.statusSource.filter((t) => t.checked == true).length === this.statusSource.length;
				break;
		}
	}

	public setAll(type: string): void {
		switch (type) {
			case 'overtime':
				this.allOvertimeChecked = !this.allOvertimeChecked;
				this.overtimeSource.forEach((t) => (t.checked = this.allOvertimeChecked));
				if (this.allOvertimeChecked) {
					this.filters += this.overtimeSource.length;
				} else {
					this.filters -= this.overtimeSource.length;
				}
				break;

			case 'project':
				this.allProjectChecked = !this.allProjectChecked;
				this.projectSource.forEach((t) => (t.checked = this.allProjectChecked));
				if (this.allProjectChecked) {
					this.filters += this.projectSource.length;
				} else {
					this.filters -= this.projectSource.length;
				}
				break;

			case 'status':
				this.allStatusChecked = !this.allStatusChecked;
				this.statusSource.forEach((t) => (t.checked = this.allStatusChecked));
				if (this.allStatusChecked) {
					this.filters += this.statusSource.length;
				} else {
					this.filters -= this.statusSource.length;
				}
				break;
		}
	}
}
