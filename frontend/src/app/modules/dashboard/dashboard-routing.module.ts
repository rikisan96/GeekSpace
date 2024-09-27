import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainBlockComponent } from './pages/main-block/main-block.component';
import { WizardComponent } from './pages/wizard/wizard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'main-block', pathMatch: 'full' },
      { path: 'wizard', component: WizardComponent },
      { path: 'main-block', component: MainBlockComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
