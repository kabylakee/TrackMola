import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursCardComponent } from './hours-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HoursCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [HoursCardComponent],
})
export class HoursCardModule { }
