import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {HeaderModule} from '../header/header.module';
import {LeftPanelModule} from '../left-panel/left-panel.module';
import {PageWrapperComponent} from './page-wrapper.component';

@NgModule({
	declarations: [PageWrapperComponent],
	imports: [HeaderModule, AppRoutingModule, MatIconModule, MatButtonModule, LeftPanelModule],
	exports: [PageWrapperComponent],
})
export class PageWrapperModule {}
