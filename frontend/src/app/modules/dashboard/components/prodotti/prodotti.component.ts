import { Component,Input, OnInit } from '@angular/core';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { Prodotti } from '../../models/prodotto';

@Component({
  selector: 'app-single-product',
  templateUrl: './prodotti.component.html',
  standalone:true,
  imports: [NgStyle, CurrencyPipe],
})
export class SingleProductComponent implements OnInit{

  @Input() prodotti : Prodotti  = <Prodotti>{}


  constructor() {}

  ngOnInit(): void {}

}
