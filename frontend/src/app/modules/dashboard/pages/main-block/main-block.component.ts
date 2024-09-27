import { Component } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SingleProductComponent } from '../../components/prodotti/prodotti.component';
import { ProdottoService } from '../../../../Services/prodotto.service'
import { RouterLink, Routes } from '@angular/router';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, SingleProductComponent,RouterLink
  ]
})

export class MainBlockComponent {

routes:Routes = [
  {path: 'wizard', component: WizardComponent}
];

prodotti:Prodotti[] = [] 

constructor(private productSvc:ProdottoService){
    this.prodotti = this.productSvc.getProdotti;
  }
}
