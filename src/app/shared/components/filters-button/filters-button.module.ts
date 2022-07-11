import {NgModule} from '@angular/core';
import {FiltersButtonComponent} from './filters-button.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [FiltersButtonComponent],
	imports: [
		CommonModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		FormsModule,
	],
	exports: [FiltersButtonComponent],
})
export class FiltersButtonModule {}
