import {NgModule} from '@angular/core';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {PageWrapperComponent} from './page-wrapper.component';

@NgModule({
	declarations: [PageWrapperComponent],
	imports: [AppRoutingModule],
	exports: [PageWrapperComponent],
})
export class PageWrapperModule {}
