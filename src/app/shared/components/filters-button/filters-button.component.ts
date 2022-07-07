import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {IStatus} from 'src/app/entities/interfaces/status.interface';
import {IOvertime} from 'src/app/entities/interfaces/overtime.interface';
import {OVERTIME} from 'src/app/entities/constants/overtime.constants';
import {STATUSES} from 'src/app/entities/constants/status.constants';
import {FilterItems} from 'src/app/entities/enums/filter-items.enum';

@Component({
	selector: 'app-filters-button',
	templateUrl: './filters-button.component.html',
	styleUrls: ['./filters-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersButtonComponent {
	@Input() public projectSource: IProject[] = [];
	public readonly statusSource: IStatus[] = Object.values(STATUSES);
	public readonly overtimeSource: IOvertime[] = Object.values(OVERTIME);
	public readonly filterItems: string[] = Object.keys(FilterItems);

	public filtersCount: number = 0;

	public allStatusChecked: boolean = false;
	public allOvertimeChecked: boolean = false;
	public allProjectChecked: boolean = false;

	onChange(type: string, checked: boolean): void {
		checked ? this.filtersCount++ : this.filtersCount--;

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
				this.overtimeSource.forEach((t) => {
					if (!t.checked && this.allOvertimeChecked) {
						this.filtersCount++;
					}
					t.checked = this.allOvertimeChecked;
				});

				if (!this.allOvertimeChecked) {
					this.filtersCount -= this.overtimeSource.length;
				}
				break;

			case 'project':
				this.allProjectChecked = !this.allProjectChecked;
				this.projectSource.forEach((t) => {
					if (!t.checked && this.allProjectChecked) {
						this.filtersCount++;
					}
					t.checked = this.allProjectChecked;
				});

				if (!this.allProjectChecked) {
					this.filtersCount -= this.projectSource.length;
				}
				break;

			case 'status':
				this.allStatusChecked = !this.allStatusChecked;
				this.statusSource.forEach((t) => {
					if (!t.checked && this.allStatusChecked) {
						this.filtersCount++;
					}
					t.checked = this.allStatusChecked;
				});

				if (!this.allStatusChecked) {
					this.filtersCount -= this.statusSource.length;
				}
				break;
		}
	}
}
