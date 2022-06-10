import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VacationComponent } from './pages/vacation/vacation.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vacation', component: VacationComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'finance', component: FinanceComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' } // route for 404 page in future
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
