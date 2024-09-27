import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    //lazy pathing per Main-Block component. Separato tra file per efficienza.
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: 'errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatStepperModule],
  providers: [
    // {provide:STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false },
    //   MatStepperIntl, useClass: MyIntl},
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
