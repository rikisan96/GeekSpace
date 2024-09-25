import { Component } from '@angular/core';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { Prodotti } from '../../models/prodotto';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  standalone: true,
  imports: [
  ]
})
export class MainBlockComponent {

}
const prodotti: Prodotti[] = [
  {
    idProdotto: 1,
    prodottoName: "Minimalistic Desk Lamp",
    tipoNature: 1, // Minimalistic
    prodottoPrimaryColour: "White",
    prodottoSecondaryColour: "Gray",
    prodottoIsRgb: 0,
    prodottoPriceUnit: 49.99,
    prodottoDescription: "A sleek, modern desk lamp with a minimalist design. Perfect for a clean workspace.",
    prodottoIsAvaiable: 1,
    tipoDesign: 1, // Minimalistic
    prodottoBrand: "LightWave",
    prodottoPicture: "minimalistic_desk_lamp.jpg"
  },
  {
    idProdotto: 2,
    prodottoName: "Futuristic Gaming Chair",
    tipoNature: 2, // Futuristic
    prodottoPrimaryColour: "Black",
    prodottoSecondaryColour: "Neon Blue",
    prodottoIsRgb: 1,
    prodottoPriceUnit: 299.99,
    prodottoDescription: "A cutting-edge gaming chair with integrated RGB lighting and ergonomic design.",
    prodottoIsAvaiable: 1,
    tipoDesign: 2, // Futuristic
    prodottoBrand: "GameX",
    prodottoPicture: "futuristic_gaming_chair.jpg"
  },
  {
    idProdotto: 3,
    prodottoName: "Retro Vinyl Player",
    tipoNature: 3, // Retro
    prodottoPrimaryColour: "Brown",
    prodottoSecondaryColour: "Beige",
    prodottoIsRgb: 0,
    prodottoPriceUnit: 149.99,
    prodottoDescription: "A stylish vintage vinyl player with wooden accents, bringing the past into the present.",
    prodottoIsAvaiable: 1,
    tipoDesign: 3, // Retro
    prodottoBrand: "SoundRetro",
    prodottoPicture: "retro_vinyl_player.jpg"
  },
  {
    idProdotto: 4,
    prodottoName: "Industrial Workbench",
    tipoNature: 4, // Industrial
    prodottoPrimaryColour: "Rust",
    prodottoSecondaryColour: "Steel Gray",
    prodottoIsRgb: 0,
    prodottoPriceUnit: 199.99,
    prodottoDescription: "A sturdy, industrial-grade workbench built for durability and heavy use.",
    prodottoIsAvaiable: 1,
    tipoDesign: 4, // Industrial
    prodottoBrand: "HeavyDuty",
    prodottoPicture: "industrial_workbench.jpg"
  },
  {
    idProdotto: 5,
    prodottoName: "Fantasy Dragon Statue",
    tipoNature: 5, // Fantasy
    prodottoPrimaryColour: "Emerald Green",
    prodottoSecondaryColour: "Gold",
    prodottoIsRgb: 0,
    prodottoPriceUnit: 89.99,
    prodottoDescription: "A hand-crafted dragon statue, perfect for fantasy lovers and collectors.",
    prodottoIsAvaiable: 1,
    tipoDesign: 5, // Fantasy
    prodottoBrand: "MythCraft",
    prodottoPicture: "fantasy_dragon_statue.jpg"
  },
  {
    idProdotto: 6,
    prodottoName: "Minimalistic Wall Clock",
    tipoNature: 1, // Minimalistic
    prodottoPrimaryColour: "Black",
    prodottoSecondaryColour: "Silver",
    prodottoIsRgb: 0,
    prodottoPriceUnit: 29.99,
    prodottoDescription: "A modern, minimalist wall clock that blends into any clean interior design.",
    prodottoIsAvaiable: 1,
    tipoDesign: 1, // Minimalistic
    prodottoBrand: "TimeDesign",
    prodottoPicture: "minimalistic_wall_clock.jpg"
  },
  {
    idProdotto: 7,
    prodottoName: "Futuristic Smart Mirror",
    tipoNature: 2, // Futuristic
    prodottoPrimaryColour: "Silver",
    prodottoSecondaryColour: "Black",
    prodottoIsRgb: 1,
    prodottoPriceUnit: 399.99,
    prodottoDescription: "A futuristic mirror with integrated AI and lighting controls, perfect for tech enthusiasts.",
    prodottoIsAvaiable: 1,
    tipoDesign: 2, // Futuristic
    prodottoBrand: "Reflecta",
    prodottoPicture: "futuristic_smart_mirror.jpg"
  },
  {
    idProdotto: 8,
    prodottoName: "Retro TV Cabinet",
    tipoNature: 3, // Retro
    prodottoPrimaryColour: "Wood Brown",
    prodottoSecondaryColour: "Cream",
    prodottoIsRgb: 0,
    prodottoPriceUnit: 199.99,
    prodottoDescription: "A vintage-inspired TV cabinet with authentic retro design and materials.",
    prodottoIsAvaiable: 1,
    tipoDesign: 3, // Retro
    prodottoBrand: "VintageLiving",
    prodottoPicture: "retro_tv_cabinet.jpg"
  },
  {
    idProdotto: 9,
    prodottoName: "Industrial Pendant Light",
    tipoNature: 4, // Industrial
    prodottoPrimaryColour: "Copper",
    prodottoSecondaryColour: "Black",
    prodottoIsRgb: 0,
    prodottoPriceUnit: 69.99,
    prodottoDescription: "A heavy-duty pendant light with industrial charm, perfect for lofts and workshops.",
    prodottoIsAvaiable: 1,
    tipoDesign: 4, // Industrial
    prodottoBrand: "MetalWorks",
    prodottoPicture: "industrial_pendant_light.jpg"
  },
  {
    idProdotto: 10,
    prodottoName: "Fantasy Wizard Staff",
    tipoNature: 5, // Fantasy
    prodottoPrimaryColour: "Dark Brown",
    prodottoSecondaryColour: "Mystic Blue",
    prodottoIsRgb: 1,
    prodottoPriceUnit: 149.99,
    prodottoDescription: "A beautifully crafted wizard staff with glowing runes, perfect for cosplay or display.",
    prodottoIsAvaiable: 1,
    tipoDesign: 5, // Fantasy
    prodottoBrand: "ArcaneForge",
    prodottoPicture: "fantasy_wizard_staff.jpg"
  }
];
