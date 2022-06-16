import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, AppRoutingModule, MatIconModule, MatButtonModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
