import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Prodottis } from '../../../../GeekSpace.Server/Models'; // Assicurati di avere un percorso corretto

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  prodotti: Prodottis[] = [this.getProducts];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<Prodottis[]>('api/prodotti').subscribe(
      (result) => {
        this.prodotti = result; // Assegna i risultati alla variabile di classe
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
