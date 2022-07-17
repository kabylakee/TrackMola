import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NotificationModule} from '../notification/notification.module';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule, NotificationModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
