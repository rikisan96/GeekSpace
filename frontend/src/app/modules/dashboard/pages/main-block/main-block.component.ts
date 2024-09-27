import { Component } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SingleProductComponent } from '../../components/prodotti/prodotti.component';
import { ProdottoService } from '../../../../Services/prodotto.service'

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, SingleProductComponent,
  ]
})
export class MainBlockComponent {

prodotti:Prodotti[] = [] 

constructor(private productSvc:ProdottoService){
    this.prodotti = this.productSvc.getProdotti;
  }
}
