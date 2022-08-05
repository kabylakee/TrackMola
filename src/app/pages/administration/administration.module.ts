import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationComponent} from './administration.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {AdminFiltersModule} from '../../shared/components/admin-filters/admin-filters.module';
import {UsersTableModule} from '../../shared/components/users-table/users-table.module';
import {AdminCalendarModule} from '../../shared/components/admin-calendar/admin-calendar.module';
import {AdminCalendarItemModule} from '../../shared/components/admin-calendar-item/admin-calendar-item.module';
import {AdminButtonsModule} from '../../shared/components/admin-buttons/admin-buttons.module';

@NgModule({
	declarations: [AdministrationComponent],
	imports: [
		CommonModule,
		HeaderModule,
		AdministrationRoutingModule,
		AdminFiltersModule,
		UsersTableModule,
		AdminCalendarModule,
		AdminCalendarItemModule,
		AdminButtonsModule,
	],
})
export class AdministrationModule {}
