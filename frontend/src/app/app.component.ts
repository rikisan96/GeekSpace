import { NavbarComponent } from './modules/layout/components/navbar/navbar.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { NftComponent } from './modules/dashboard/pages/nft/nft.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, DashboardComponent, NftComponent, RouterOutlet, ResponsiveHelperComponent, NgxSonnerToaster],
})
export class AppComponent implements OnInit {  // Implementa l'interfaccia OnInit
  constructor(public themeService: ThemeService ) {}

  // Implementa il metodo ngOnInit
  ngOnInit(): void {
     setTimeout(() => toast("Benvenuto!"), 8100); // Esegui la logica di inizializzazione qui
  }
}

