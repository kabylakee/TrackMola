import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {HoursCardComponent} from './hours-card.component';
import {MatCardModule} from '@angular/material/card';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
@NgModule({
	declarations: [HoursCardComponent],
	imports: [CommonModule, MatCardModule],
	exports: [HoursCardComponent],
})
export class HoursCardModule {}
