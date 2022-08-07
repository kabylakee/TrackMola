import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {ITableColumn} from '../../entities/interfaces/table-column.interface';
import {IEmployee} from '../../entities/interfaces/employee.interface';
import {UsersService} from '../../shared/services/users.service';
import {USERS_TABLE_CONFIG} from '../../entities/constants/users-columns.config';
import {AdminTabsTitle} from '../../entities/enums/tabs.enum';
import {AdminButtonsEnum} from '../../entities/enums/admin-buttons.enum';
import {IHoliday} from '../../entities/interfaces/holiday.interface';
import {CountryEnum} from '../../entities/enums/country.enum';
import {HolidayService} from '../../shared/services/holiday.service';
import {SELECT_ALL} from 'src/app/entities/constants/formats.constants';
import {takeWhile} from 'rxjs';

@Component({
	selector: 'app-administration',
	templateUrl: './administration.component.html',
	styleUrls: ['./administration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministrationComponent implements OnInit, OnDestroy {
	@Input() changeDate: Date;

	public users: IEmployee[] = [];
	public columns: ITableColumn[] = [];
	public tabs = AdminTabsTitle;
	public tab: AdminTabsTitle = AdminTabsTitle.Calendar;
	public searchValue = '';
	public adminButtonAction: AdminButtonsEnum;
	public selectedProject = SELECT_ALL;
	public changedDate: Date = new Date();
	public holiday: IHoliday;
	public country: CountryEnum = CountryEnum.Belarus;
	public clickedDay: Set<Date>;
	public readonly title =
		RouterPaths.Administration.charAt(0).toUpperCase() + RouterPaths.Administration.slice(1);

	private isSub = true;

	constructor(private usersService: UsersService, private holidayService: HolidayService) {}

	public ngOnInit(): void {
		this.getUsers();
		this.columns = USERS_TABLE_CONFIG;
	}

	private getUsers(): void {
		this.usersService
			.getUsers()
			.pipe(takeWhile(() => this.isSub))
			.subscribe((users) => (this.users = users));
	}

	public changeTabsValue(tabsValue: AdminTabsTitle): void {
		this.tab = tabsValue;
	}

	public onSearchValueChange(event: string): void {
		this.searchValue = event;
	}

	public onSetSchedule(event: IHoliday): void {
		let holidayDays: IHoliday[] = [];
		if (this.clickedDay && event) {
			this.clickedDay.forEach((value) => {
				this.holiday = {...event, date: value, country: this.country};
				holidayDays.push(this.holiday);
			});
		}
		this.holidayService.createHoliday(holidayDays);
	}

	public onAdminButtonAction(action: AdminButtonsEnum): void {
		this.adminButtonAction = action;
	}

	public onChangeProject(event: string): void {
		this.selectedProject = event;
	}

	public onChangeDate(event: Date): void {
		this.changedDate = event;
	}

	public onToggleCountry(country: CountryEnum): void {
		this.country = country;
	}

	public onClickedDays(event: Set<Date>): void {
		this.clickedDay = new Set(event);
	}

	ngOnDestroy() {
		this.isSub = false;
	}
}
