import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsComponent} from './projects.component';
import {ProjectsRoutingModule} from './projects-routing.module';
import {HeaderModule} from 'src/app/shared/components/header/header.module';

@NgModule({
	declarations: [ProjectsComponent],
	imports: [CommonModule, HeaderModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
