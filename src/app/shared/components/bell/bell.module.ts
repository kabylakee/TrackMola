import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BellComponent} from './bell.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
	declarations: [BellComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
	exports: [BellComponent],
})
export class BellModule {}
