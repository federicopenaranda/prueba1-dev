import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ProcesoService } from 'src/app/features/proceso/services/proceso.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
    @Input() model!: any;
    @Output() formGuardado = new EventEmitter<boolean>();

    constructor(
        // private procesoService: ProcesoService
    ) {}

    // @ts-ignore
    dynamicFormGroup: FormGroup;
    fields: any[] = [];
    fieldProps: any;

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        const formGroupFields = this.getFormControlsFields();
        this.dynamicFormGroup = new FormGroup(formGroupFields);
    }

    getFormControlsFields() {
        const formGroupFields = {} as any;
        for (const field of Object.keys(this.model)) {
            const fieldProps = this.model[field] as any;
            const validators = this.addValidator(fieldProps.rules);
            formGroupFields[field] = new FormControl(fieldProps.value, validators);
            this.fields.push({ ...fieldProps, fieldName: field });
        }
        return formGroupFields;
    }

    private addValidator(rules: any): any[] {
        if (!rules) {
            return [];
        }

        const validators: any = [];

        Object.keys(rules)
            .forEach((rule: string) => {
                switch (rule) {
                    case 'required': {
                        if ( rules['required'] ) {
                            validators.push(Validators.required);
                        }
                        break;
                    }
                    // TODO: Añadir mas validaciones
                }
            });
        return validators;
    }

    // saveForm() {
    //     const formRes: { id: number, value: any }[] = [];
    //     const formCtrls = this.dynamicFormGroup.value;
    //     const formKeys = Object.keys(this.dynamicFormGroup.value);
    //     formKeys.forEach( (key: string) => {
    //         formRes.push({
    //             id: +key.replace('field-', ''),
    //             value: formCtrls[key]
    //         });
    //     });
    //     this.procesoService.saveEtapaCampo(formRes)
    //         .subscribe({
    //             next: (res) => {
    //                 console.log(res)
    //                 this.formGuardado.emit(true);
    //             }
    //         });
    // }


}
