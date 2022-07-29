import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagementComponent} from './management.component';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {ManagementRoutingModule} from './management-routing.module';
import {ManagerFiltersModule} from 'src/app/shared/components/manager-filters/manager-filters.module';

@NgModule({
	declarations: [ManagementComponent],
	imports: [CommonModule, HeaderModule, ManagementRoutingModule, ManagerFiltersModule],
})
export class ManagementModule {}
