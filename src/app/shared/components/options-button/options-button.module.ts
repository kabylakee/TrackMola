import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OptionsButtonComponent} from './options-button.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
	declarations: [OptionsButtonComponent],
	imports: [
		CommonModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatSnackBarModule,
	],
	exports: [OptionsButtonComponent],
})
export class OptionsButtonModule {}
