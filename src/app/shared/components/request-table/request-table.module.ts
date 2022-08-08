import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestTableComponent} from './request-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
	declarations: [RequestTableComponent],
	imports: [CommonModule, MatTableModule],
	exports: [RequestTableComponent],
})
export class RequestTableModule {}
