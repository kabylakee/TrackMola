import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationComponent } from './vacation.component';
import { VacationRoutingModule } from './vacation-routing.module';



@NgModule({
  declarations: [
    VacationComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule,
  ]
})
export class VacationModule { }
