import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleButtonComponent} from './toggle-button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
	declarations: [ToggleButtonComponent],
	imports: [CommonModule, MatButtonToggleModule],
	exports: [ToggleButtonComponent],
})
export class ToggleButtonModule {}
