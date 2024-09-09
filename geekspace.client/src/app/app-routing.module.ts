import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NftSingleCardComponent } from './modules/dashboard/components/nft/nft-single-card/nft-single-card.component';
const routes: Routes = [
  {
  path: "", component: DashboardComponent
  },

  {
  path: "/nft", component: NftSingleCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
