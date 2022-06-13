import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacationComponent } from './vacation.component';

const routes: Routes = [
  {
    path: '',
    component: VacationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacationRoutingModule {}
