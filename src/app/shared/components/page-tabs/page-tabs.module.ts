import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTabsComponent} from './page-tabs.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [PageTabsComponent],
	imports: [CommonModule, MatButtonToggleModule, MatIconModule],
	exports: [PageTabsComponent],
})
export class PageTabsModule {}
