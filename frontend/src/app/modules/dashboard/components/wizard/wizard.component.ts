import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prodotti } from '../../models/prodotto';
import { from } from 'rxjs';

@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard.component.html',
})
export class DesignStepperComponent implements OnInit {
  designFormGroup!: FormGroup;
  hardwareFormGroup!: FormGroup;
  arredamentoFormGroup!: FormGroup;
  illuminazioneFormGroup!: FormGroup;
  accessoriFormGroup!: FormGroup;

  designTypes = ['Minimal', 'Futuristic', 'Retro', 'Industrial', 'Fantasy'];
  filteredHardware = [];
  filteredArredamento = [];
  filteredIlluminazione = [];
  filteredAccessori = [];


  constructor(private _formBuilder: FormBuilder ) {}

  ngOnInit() {
    this.designFormGroup = this._formBuilder.group({
      designType: ['', Validators.required]
    });
    this.hardwareFormGroup = this._formBuilder.group({
      hardware: ['', Validators.required]
    });
    this.arredamentoFormGroup = this._formBuilder.group({
      arredamento: ['', Validators.required]
    });
    this.illuminazioneFormGroup = this._formBuilder.group({
      illuminazione: ['', Validators.required]
    });
    this.accessoriFormGroup = this._formBuilder.group({
      accessori: ['', Validators.required]
    });
  }

  onDesignSelection() {
    const selectedDesign = this.designFormGroup.value.designType;

    // Filtra hardware in base al design selezionato
    this.filteredHardware = this.prodotti.filter(p => p.tipoDesign === this.getDesignCode(selectedDesign) && this.isHardware(p));

    // Stessa logica per gli altri step
  }

  onHardwareSelection() {
    const selectedHardware = this.hardwareFormGroup.value.hardware;

    // Filtra arredamento in base al design e hardware selezionati
    this.filteredArredamento = this.prodotti.filter(p => this.isArredamento(p));
  }

  getDesignCode(designType: string): number {
    switch (designType) {
      case 'Minimal': return 1;
      case 'Futuristic': return 2;
      case 'Retro': return 3;
      case 'Industrial': return 4;
      case 'Fantasy': return 5;
      default: return 0;
    }
  }

  isHardware(prod: any): boolean {
    // Definisci la logica per considerare un prodotto come hardware
    return ['mouse', 'tastiera', 'case'].includes(prod.prodottoName.toLowerCase());
  }

  isArredamento(prod: any): boolean {
    // Definisci la logica per considerare un prodotto come arredamento
    return ['scrivania', 'mensola', 'supporto', 'poltrona'].includes(prod.prodottoName.toLowerCase());
  }

  // Stessa logica per illuminazione e accessori...

  submitDesign() {
    const design = {
      designType: this.designFormGroup.value.designType,
      hardware: this.hardwareFormGroup.value.hardware,
      arredamento: this.arredamentoFormGroup.value.arredamento,
      illuminazione: this.illuminazioneFormGroup.value.illuminazione,
      accessori: this.accessoriFormGroup.value.accessori
    };

    console.log('Final Design:', design);
  }
}



// import {Component, Injectable, inject} from '@angular/core';
// import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatStepperIntl, MatStepperModule} from '@angular/material/stepper';
// import {MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatRadioModule} from '@angular/material/radio';
//
// @Injectable()
// export class StepperIntl extends MatStepperIntl {
//   // the default optional label text, if unspecified is "Optional"
//   override optionalLabel = 'Optional Label';
// }
//
// /**
//  * @title Stepper that uses the MatStepperIntl service
//  */
// @Component({
//   selector: 'stepper-intl-example',
//   templateUrl: './wizard.component.html',
//   // styleUrl: 'stepper-intl-example.css',
//   providers: [{provide: MatStepperIntl, useClass: StepperIntl}],
//   standalone: true,
//   imports: [
//     MatRadioModule,
//     FormsModule,
//     MatStepperModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//   ],
// })
// export class StepperIntlExample {
//   private _formBuilder = inject(FormBuilder);
//   private _matStepperIntl = inject(MatStepperIntl);
//
//   optionalLabelText: string;
//   optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
//   firstFormGroup = this._formBuilder.group({
//     firstCtrl: ['', Validators.required],
//   });
//   secondFormGroup = this._formBuilder.group({
//     secondCtrl: ['', Validators.required],
//   });
//
//   updateOptionalLabel() {
//     this._matStepperIntl.optionalLabel = this.optionalLabelText;
//     // Required for the optional label text to be updated
//     // Notifies the MatStepperIntl service that a change has been made
//     this._matStepperIntl.changes.next();
//   }
// }
