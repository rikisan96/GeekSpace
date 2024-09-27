import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStepperComponent } from '../../components/wizard/wizard-product-stepper/wizard-stepper.component';
import { ProductTableComponent } from '../../components/wizard/wizard-product-table/wizard-product-table.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  standalone: true,
  imports: [ProductStepperComponent, ProductTableComponent]
})
export class WizardComponent {

}
