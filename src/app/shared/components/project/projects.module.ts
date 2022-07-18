import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [ProjectComponent],
	imports: [CommonModule],
	exports: [ProjectComponent],
})
export class ProjectModule {}
