import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationComponent} from './administration.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {AdminFiltersModule} from '../../shared/components/admin-filters/admin-filters.module';
import {UsersTableModule} from '../../shared/components/users-table/users-table.module';

@NgModule({
	declarations: [AdministrationComponent],
	imports: [
		CommonModule,
		HeaderModule,
		AdministrationRoutingModule,
		AdminFiltersModule,
		UsersTableModule,
	],
})
export class AdministrationModule {}
