import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {BellModule} from '../bell/bell.module';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule, BellModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
