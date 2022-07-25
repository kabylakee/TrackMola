import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {ExportExcelComponent} from './export-excel.component';

@NgModule({
	declarations: [ExportExcelComponent],
	imports: [CommonModule, MatButtonModule],
	exports: [ExportExcelComponent],
})
export class ExportExcelModule {}
