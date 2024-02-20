import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MaterialModule } from './material.module';
import { UtilsService } from './services/utils.service';
import { DynamicErrorComponent } from './components/dynamic-error/dynamic-error.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicInputComponent } from './components/field-types/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/field-types/dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from './components/field-types/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from './components/field-types/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicFileComponent } from './components/field-types/dynamic-file/dynamic-file.component';
import { DynamicTextareaComponent } from './components/field-types/dynamic-textarea/dynamic-textarea.component';
import { DynamicDateComponent } from './components/field-types/dynamic-date/dynamic-date.component';
import { DynamicTimeComponent } from './components/field-types/dynamic-time/dynamic-time.component';
import { DynamicCountryComponent } from './components/field-types/dynamic-country/dynamic-country.component';
import { DynamicTimezoneComponent } from './components/field-types/dynamic-timezone/dynamic-timezone.component';
import { DynamicUnitComponent } from './components/field-types/dynamic-unit/dynamic-unit.component';
import { ModalVerificaEliminarComponent } from './components/modals/modal-elimina-tipo/modal-verifica-eliminar.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        CdkAccordionModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule
    ],
    providers: [UtilsService,],
    declarations: [
      DynamicErrorComponent,
      DynamicFieldComponent,
      DynamicFormComponent,
      DynamicFormComponent,
      DynamicFieldComponent,
      DynamicInputComponent,
      DynamicSelectComponent,
      DynamicRadioComponent,
      DynamicCheckboxComponent,
      DynamicFileComponent,
      DynamicTextareaComponent,
      DynamicDateComponent,
      DynamicTimeComponent,
      DynamicCountryComponent,
      DynamicTimezoneComponent,
      DynamicUnitComponent,
      DynamicErrorComponent,
      ModalVerificaEliminarComponent
    ]
})
export class SharedModule { }
