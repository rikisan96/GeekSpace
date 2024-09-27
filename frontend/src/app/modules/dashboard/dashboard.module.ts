import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainBlockComponent } from './pages/main-block/main-block.component';
import { WizardComponent } from './components/wizard/wizard.component';

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [ 
    WizardComponent
  ],
})
export class DashboardModule {}
