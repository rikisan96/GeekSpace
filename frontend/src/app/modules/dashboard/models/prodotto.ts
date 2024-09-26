
export interface Prodotti {
    idProdotto: number;
    prodottoName: string | null;
    tipoNature: number | null;
    prodottoPrimaryColour: string | null;
    prodottoSecondaryColour: string | null;
    prodottoIsRgb: number | null;
    prodottoPriceUnit: number | null;
    prodottoDescription: string | null;
    prodottoIsAvaiable: number | null;
    tipoDesign: number | null;
    prodottoBrand: string | null;
    prodottoPicture: string | null;
    // elementiCarrellos: ElementiCarrello[];
    // tipoDesignNavigation: Tipo | null;
    // tipoNatureNavigation: Tipo | null;
}

//roba commentata da integrare con merge su backend
//NON INSERIRE PRODOTTI 

const prodotti: Prodotti[] = [
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
    prodottoPicture: 'minimalistic_workstation_a1.jpg'
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
    prodottoPicture: 'futuristic_workstation_x2.jpg'
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
    prodottoPicture: 'retro_workstation_classic_r3.jpg'
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
    prodottoPicture: 'industrial_workstation_pro_i4.jpg'
  },
  {
    idProdotto: 5,
    prodottoName: 'Fantasy Workstation Mystic F5',
    tipoNature: 5, // Fantasy
    prodottoPrimaryColour: 'Purple',
    prodottoSecondaryColour: 'Gold',
    prodottoIsRgb: 1,
    prodottoPriceUnit: 899.99,
    prodottoDescription: 'A magical workstation for creative minds.',
    prodottoIsAvaiable: 1,
    tipoDesign: 5, // Fantasy
    prodottoBrand: 'MysticTech',
    prodottoPicture: 'fantasy_workstation_mystic_f5.jpg'
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
    prodottoPicture: 'minimalistic_desk_b2.jpg'
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
    prodottoPicture: 'futuristic_chair_z1.jpg'
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
    prodottoPicture: 'retro_monitor_r4.jpg'
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
    prodottoPicture: 'industrial_keyboard_i6.jpg'
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
    prodottoPicture: 'fantasy_mouse_f7.jpg'
  }
];
