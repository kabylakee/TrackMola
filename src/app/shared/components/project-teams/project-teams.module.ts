import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectTeamsComponent} from './project-teams.component';
import {MatSelectModule} from '@angular/material/select';
import {ProjectModule} from '../project/projects.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [ProjectTeamsComponent],
	imports: [
		MatSelectModule,
		ProjectModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
	],
	exports: [ProjectTeamsComponent],
})
export class ProjectTeamsModule {}
