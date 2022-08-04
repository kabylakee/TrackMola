import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectSelectComponent} from './project-select.component';
import {ProjectModule} from '../project/projects.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [ProjectSelectComponent],
	imports: [CommonModule, ProjectModule, MatFormFieldModule, MatSelectModule, MatIconModule],
	exports: [ProjectSelectComponent],
})
export class ProjectSelectModule {}
