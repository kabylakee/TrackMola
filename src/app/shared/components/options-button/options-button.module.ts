import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OptionsButtonComponent} from './options-button.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [OptionsButtonComponent],
	imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule],
	exports: [OptionsButtonComponent],
})
export class OptionsButtonModule {}
