import { Component } from '@angular/core';
import { Prodotti } from '../../models/prodotto';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SingleProductComponent } from '../../components/prodotti/prodotti.component';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, SingleProductComponent
  ]
})
export class MainBlockComponent {


prodotti: Prodotti[] = [
  {
    idProdotto: 1,
    prodottoName: 'Minimalistic Workstation A1',
    tipoNature: 1, // Minimalistic
    prodottoPrimaryColour: 'White',
    prodottoSecondaryColour: 'Black',
    prodottoIsRgb: 0,
    prodottoPriceUnit: 299.99,
    prodottoDescription: 'A clean and simple workstation for minimalists.',
    prodottoIsAvaiable: 1,
    tipoDesign: 1, // Minimalistic
    prodottoBrand: 'Simplicity',
    prodottoPicture: 'https://cdn.mos.cms.futurecdn.net/5pKYKNoLQT6QaqSAM6fT3R-970-80.jpg'
  },
  {
    idProdotto: 2,
    prodottoName: 'Futuristic Workstation X2',
    tipoNature: 2, // Futuristic
    prodottoPrimaryColour: 'Silver',
    prodottoSecondaryColour: 'Blue',
    prodottoIsRgb: 1,
    prodottoPriceUnit: 599.99,
    prodottoDescription: 'A sleek and modern workstation for the future.',
    prodottoIsAvaiable: 1,
    tipoDesign: 2, // Futuristic
    prodottoBrand: 'FuturaTech',
    prodottoPicture: 'https://imgs.search.brave.com/78NEZY4iALMlLRFn03IpPbBP56Q2fe_J8so15jJVmtM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI4LzE0/LzMyLzI4MTQzMjdk/YTI4YzRhNmNkN2Y5/NDhkNmZjOTllZDdl/LS1nYW1pbmctY29t/cHV0ZXItY29tcHV0/ZXItY2FzZS5qcGc'
  },
  {
    idProdotto: 3,
    prodottoName: 'Retro Workstation Classic R3',
    tipoNature: 3, // Retro
    prodottoPrimaryColour: 'Brown',
    prodottoSecondaryColour: 'Beige',
    prodottoIsRgb: 0,
    prodottoPriceUnit: 449.99,
    prodottoDescription: 'A classic design inspired by the 80s.',
    prodottoIsAvaiable: 1,
    tipoDesign: 3, // Retro
    prodottoBrand: 'RetroGear',
    prodottoPicture: 'https://imgs.search.brave.com/IxveFNfWO1pDLp5FBKpWA6o_DjIMJa1HQt5s3_eq0Lc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZXRh/c2ltcmFjaW5nLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNC9BbnRlYy1E/YXJrLUN1YmUtSVRY/LUNhc2UtNDI3eDUw/MC53ZWJw'
  },
  {
    idProdotto: 4,
    prodottoName: 'Industrial Workstation Pro I4',
    tipoNature: 4, // Industrial
    prodottoPrimaryColour: 'Grey',
    prodottoSecondaryColour: 'Black',
    prodottoIsRgb: 0,
    prodottoPriceUnit: 749.99,
    prodottoDescription: 'A rugged and robust workstation for tough environments.',
    prodottoIsAvaiable: 1,
    tipoDesign: 4, // Industrial
    prodottoBrand: 'IndustroMax',
    prodottoPicture: 'https://imgs.search.brave.com/CKklV7A7vGU5ABKhw7bm7Zxi0uBVb5ME7Y9koYNLZCs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92b2x0/Y2F2ZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDQv/cm9iZXl0ZWNoLXNl/bm5hLWZlYXR1cmVk/LWltYWdlLndlYnA'
  },
  {
    idProdotto: 5,
    prodottoName: 'Icy Workstation Case Mystic F5',
    tipoNature: 5, // Fantasy
    prodottoPrimaryColour: 'Green',
    prodottoSecondaryColour: 'Black',
    prodottoIsRgb: 1,
    prodottoPriceUnit: 899.99,
    prodottoDescription: 'A very COOL case for creative minds.',
    prodottoIsAvaiable: 1,
    tipoDesign: 5, // Fantasy
    prodottoBrand: 'MysticTech',
    prodottoPicture: 'https://gamerbox.it/8878-large_default/case-thermaltake-the-tower-200-mini-tower-verde-scuro-tempered-glass.jpg'
  },
  {
    idProdotto: 6,
    prodottoName: 'Minimalistic Desk B2',
    tipoNature: 1, // Minimalistic
    prodottoPrimaryColour: 'Black',
    prodottoSecondaryColour: 'White',
    prodottoIsRgb: 0,
    prodottoPriceUnit: 199.99,
    prodottoDescription: 'A sleek black desk for minimal setups.',
    prodottoIsAvaiable: 1,
    tipoDesign: 1, // Minimalistic
    prodottoBrand: 'CleanSpace',
    prodottoPicture: 'https://computerdeskideas.com/wp-content/uploads/2021/12/Black-White-Minimal-Setup-with-Wall-mounted-PC-and-Desk-768x576.jpg'
  },
  {
    idProdotto: 7,
    prodottoName: 'Futuristic Chair Z1',
    tipoNature: 2, // Futuristic
    prodottoPrimaryColour: 'Blue',
    prodottoSecondaryColour: 'Silver',
    prodottoIsRgb: 1,
    prodottoPriceUnit: 349.99,
    prodottoDescription: 'A futuristic chair with LED lights.',
    prodottoIsAvaiable: 1,
    tipoDesign: 2, // Futuristic
    prodottoBrand: 'FuturaSeat',
    prodottoPicture: 'https://imgs.search.brave.com/KyahC-4bMisUTW_muIIaQ41ivdBbT5JK-kV9Gno0kNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFWMWJNVzh3aEwu/anBn'
  },
  {
    idProdotto: 8,
    prodottoName: 'Retro Monitor R4',
    tipoNature: 3, // Retro
    prodottoPrimaryColour: 'Beige',
    prodottoSecondaryColour: 'Brown',
    prodottoIsRgb: 0,
    prodottoPriceUnit: 249.99,
    prodottoDescription: 'A vintage-style monitor with modern capabilities.',
    prodottoIsAvaiable: 1,
    tipoDesign: 3, // Retro
    prodottoBrand: 'RetroDisplay',
    prodottoPicture: 'https://i.etsystatic.com/20693881/r/il/50bad9/6296120864/il_340x270.6296120864_kgaj.jpg'
  },
  {
    idProdotto: 9,
    prodottoName: 'Industrial Keyboard I6',
    tipoNature: 4, // Industrial
    prodottoPrimaryColour: 'Metallic Grey',
    prodottoSecondaryColour: 'Black',
    prodottoIsRgb: 0,
    prodottoPriceUnit: 149.99,
    prodottoDescription: 'A tough and durable mechanical keyboard.',
    prodottoIsAvaiable: 1,
    tipoDesign: 4, // Industrial
    prodottoBrand: 'SteelKeys',
    prodottoPicture: 'https://m.media-amazon.com/images/I/61ejFo8s57L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    idProdotto: 10,
    prodottoName: 'Fantasy Mouse F7',
    tipoNature: 5, // Fantasy
    prodottoPrimaryColour: 'Gold',
    prodottoSecondaryColour: 'Purple',
    prodottoIsRgb: 1,
    prodottoPriceUnit: 99.99,
    prodottoDescription: 'A magical mouse with customizable RGB lighting.',
    prodottoIsAvaiable: 1,
    tipoDesign: 5, // Fantasy
    prodottoBrand: 'MysticMouse',
    prodottoPicture: 'https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_SL1500_.jpg'
  }
];
}
