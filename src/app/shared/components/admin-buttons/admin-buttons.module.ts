import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminButtonsComponent} from './admin-buttons.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [AdminButtonsComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
	exports: [AdminButtonsComponent],
})
export class AdminButtonsModule {}
