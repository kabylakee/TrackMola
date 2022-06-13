import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VacationComponent } from './pages/vacation/vacation.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterPaths } from './entities/enums/router.enum';

const routes: Routes = [
  { path: RouterPaths.Dashboard, component: DashboardComponent },
  { path: RouterPaths.Vacation, component: VacationComponent },
  { path: RouterPaths.Statistic, component: StatisticComponent },
  { path: RouterPaths.Reports, component: ReportsComponent },
  { path: RouterPaths.Projects, component: ProjectsComponent },
  { path: RouterPaths.Finance, component: FinanceComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' } // route for 404 page in future
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
