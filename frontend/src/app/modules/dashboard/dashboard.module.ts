import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainBlockComponent } from './pages/main-block/main-block.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { ProductStepperComponent } from './components/wizard/wizard-product-stepper/wizard-stepper.component';
import { ProductTableComponent } from './components/wizard/wizard-product-table/wizard-product-table.component';

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [ ],
})
export class DashboardModule {}
