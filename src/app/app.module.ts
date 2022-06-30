import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LeftPanelModule} from './shared/components/left-panel/left-panel.module';
import {PageWrapperModule} from './shared/components/page-wrapper/page-wrapper.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, LeftPanelModule, PageWrapperModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
