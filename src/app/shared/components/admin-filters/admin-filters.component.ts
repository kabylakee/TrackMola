import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import {IViewPeriod} from '../../../entities/interfaces/view-period.interface';
import {CountryEnum} from '../../../entities/enums/country.enum';
import {COUNTRY_TOGGLE} from '../../../entities/constants/country.constants';
import {Period} from '../../../entities/enums/period.enum';
import {ADMIN_TABS} from '../../../entities/constants/admin-tabs.constants';
import {MatDialog} from '@angular/material/dialog';
import {SetScheduleComponent} from '../set-schedule/set-schedule.component';
import {AdminTabsTitle} from '../../../entities/enums/tabs.enum';
import {IProject} from '../../../entities/interfaces/project.interface';
import {PROJECT_MOCK} from '../../../entities/constants/project.mock';
import {IHoliday} from '../../../entities/interfaces/holiday.interface';
import {SELECT_ALL} from '../../../entities/constants/formats.constants';

@Component({
	selector: 'app-admin-filters',
	templateUrl: './admin-filters.component.html',
	styleUrls: ['./admin-filters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFiltersComponent implements OnChanges {
	@Input() clickedDay: Set<Date>;

	@Output() tabsValue = new EventEmitter<AdminTabsTitle>();
	@Output() searchValueChange = new EventEmitter<string>();
	@Output() changeProject = new EventEmitter<string>();
	@Output() changeDate = new EventEmitter<Date>();
	@Output() toggleCountry = new EventEmitter<CountryEnum>();
	@Output() setWeekendSchedule = new EventEmitter<IHoliday>();

	public readonly toggleConfig: IViewPeriod<CountryEnum>[] = COUNTRY_TOGGLE;
	public readonly tabsConfig: IViewPeriod<AdminTabsTitle>[] = ADMIN_TABS;
	public readonly tabs = AdminTabsTitle;
	public readonly SELECT_ALL = 'Select All';
	public tabChange: AdminTabsTitle = AdminTabsTitle.Calendar;
	public countrySelection: CountryEnum = CountryEnum.Belarus;
	public periodRange: Period = Period.Month;
	public projects: IProject[] = PROJECT_MOCK;
	public currentProject = SELECT_ALL;
	public isDisabled = true;

	constructor(public dialog: MatDialog) {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.clickedDay.currentValue && this.clickedDay) {
			this.isDisabled = !this.clickedDay?.size;
		}
	}

	public openDialog(): void {
		const dialogRef = this.dialog.open(SetScheduleComponent, {
			position: {
				top: 'calc(50vh - 15.35 * var(--offset))',
				left: 'calc(50vw - 6.5 * var(--offset))',
			},
			data: this.clickedDay,
		});
		dialogRef.afterClosed().subscribe((data) => {
			this.setWeekendSchedule.emit(data);
		});
	}

	public changeTabValue(event: AdminTabsTitle): void {
		this.tabChange = event;
		this.tabsValue.emit(event);
	}

	public selectProject(value: Event): void {
		this.currentProject =
			value + '' === SELECT_ALL
				? value + ''
				: this.projects.find((project) => project.title === `${value}`)!.title;
		this.changeProject.emit(this.currentProject);
	}

	public changeCountry(element: CountryEnum): void {
		this.countrySelection = element;
		this.toggleCountry.emit(element);
	}
}
