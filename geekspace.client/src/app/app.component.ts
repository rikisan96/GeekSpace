import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { NftComponent } from './modules/dashboard/pages/nft/nft.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass,DashboardComponent, NftComponent , RouterOutlet, ResponsiveHelperComponent, NgxSonnerToaster],
})
export class AppComponent {
  title = 'Geekspace!';

  constructor(public themeService: ThemeService ) {

    setTimeout(()=>toast("Ciao"),8100)
  }
}
