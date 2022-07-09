import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {IFilterItem} from 'src/app/entities/interfaces/filter-item.interface';
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
	public readonly statusSource: IFilterItem[] = Object.values(STATUSES);
	public readonly overtimeSource: IFilterItem[] = Object.values(OVERTIME);
	public readonly filterItems: string[] = Object.keys(FilterItems);

	public opened: string = '';
	public filtersCount: number = 0;

	public status: IFilterItem = {
		checked: false,
		title: 'status',
	};
	public project: IProject = {
		checked: false,
		title: 'project',
	};
	public overtime: IFilterItem = {
		checked: false,
		title: 'overtime',
	};

	onChange(title: string, checked: boolean): void {
		checked ? this.filtersCount++ : this.filtersCount--;

		switch (title) {
			case 'overtime':
				this.overtime.checked =
					this.overtimeSource.filter((t) => t.checked == true).length ===
					this.overtimeSource.length;
				break;

			case 'project':
				this.project.checked =
					this.projectSource.filter((t) => t.checked == true).length === this.projectSource.length;
				break;

			case 'status':
				this.status.checked =
					this.statusSource.filter((t) => t.checked == true).length === this.statusSource.length;
				break;
		}
	}

	public setAll(title: string): void {
		switch (title) {
			case 'overtime':
				this.overtime.checked = !this.overtime.checked;
				this.overtimeSource.forEach((t) => {
					if (!t.checked && this.overtime.checked) {
						this.filtersCount++;
					}
					t.checked = this.overtime.checked;
				});

				if (!this.overtime.checked) {
					this.filtersCount -= this.overtimeSource.length;
				}
				break;

			case 'project':
				this.project.checked = !this.project.checked;
				this.projectSource.forEach((t) => {
					if (!t.checked && this.project.checked) {
						this.filtersCount++;
					}
					t.checked = this.project.checked;
				});

				if (!this.project.checked) {
					this.filtersCount -= this.projectSource.length;
				}
				break;

			case 'status':
				this.status.checked = !this.status.checked;
				this.statusSource.forEach((t) => {
					if (!t.checked && this.status.checked) {
						this.filtersCount++;
					}
					t.checked = this.status.checked;
				});

				if (!this.status.checked) {
					this.filtersCount -= this.statusSource.length;
				}
				break;
		}
	}
}
