import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableFilterComponent} from './table-filter.component';
import {ToggleButtonModule} from 'src/app/shared/components/toggle-button/toggle-button.module';

@NgModule({
	declarations: [TableFilterComponent],
	imports: [CommonModule, ToggleButtonModule],
	exports: [TableFilterComponent],
})
export class TableFilterModule {}
