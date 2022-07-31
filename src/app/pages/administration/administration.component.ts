import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {ITableColumn} from '../../entities/interfaces/table-column.interface';
import {IEmployee} from '../../entities/interfaces/employee.interface';
import {UsersService} from '../../shared/services/users.service';
import {USERS_TABLE_CONFIG} from '../../entities/constants/users-columns.config';
import {AdminTabsTitle} from '../../entities/enums/tabs.enum';

@Component({
	selector: 'app-administration',
	templateUrl: './administration.component.html',
	styleUrls: ['./administration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministrationComponent implements OnInit {
	public users: IEmployee[] = [];
	public columns: ITableColumn[] = [];
	public tabs = AdminTabsTitle;
	public tab: AdminTabsTitle = AdminTabsTitle.Calendar;
	public searchValue = '';

	constructor(private usersService: UsersService) {}

	public ngOnInit(): void {
		this.getUsers();
		this.columns = USERS_TABLE_CONFIG;
	}

	private getUsers(): void {
		this.usersService.getUsers().subscribe((users) => (this.users = users));
	}

	public changeTabsValue(tabsValue: AdminTabsTitle): void {
		this.tab = tabsValue;
	}

	public readonly title =
		RouterPaths.Administration.charAt(0).toUpperCase() + RouterPaths.Administration.slice(1);

	public onSearchValueChange(event: string): void {
		this.searchValue = event;
	}
}
