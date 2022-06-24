import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableFilterComponent} from './table-filter.component';
import {ToggleButtonModule} from 'src/app/shared/components/toggle-button/toggle-button.module';
import {OptionsButtonModule} from '../options-button/options-button.module';

@NgModule({
	declarations: [TableFilterComponent],
	imports: [CommonModule, ToggleButtonModule, OptionsButtonModule],
	exports: [TableFilterComponent],
})
export class TableFilterModule {}
