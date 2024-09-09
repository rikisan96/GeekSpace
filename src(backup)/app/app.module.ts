import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-components/home/home.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './main-components/products/products.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  //{
  //  path: "products",
  //  component: ProductsComponent
  //} rotta per Prodotti
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FetchDataComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    NgbModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
