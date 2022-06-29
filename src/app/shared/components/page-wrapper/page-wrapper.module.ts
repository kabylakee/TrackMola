import {NgModule} from '@angular/core';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {HeaderModule} from '../header/header.module';
import {PageWrapperComponent} from './page-wrapper.component';

@NgModule({
	declarations: [PageWrapperComponent],
	imports: [HeaderModule, AppRoutingModule,],
	exports: [PageWrapperComponent],
})
export class PageWrapperModule {}
