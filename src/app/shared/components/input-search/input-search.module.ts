import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputSearchComponent} from './input-search.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [InputSearchComponent],
	imports: [CommonModule, MatInputModule, MatIconModule, FormsModule],
	exports: [InputSearchComponent],
})
export class InputSearchModule {}
