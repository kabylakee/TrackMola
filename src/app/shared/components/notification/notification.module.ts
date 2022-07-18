import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from './notification.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {NoDataModule} from '../no-data/no-data.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
	declarations: [NotificationComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		NoDataModule,
		MatTooltipModule,
	],
	exports: [NotificationComponent],
})
export class NotificationModule {}
