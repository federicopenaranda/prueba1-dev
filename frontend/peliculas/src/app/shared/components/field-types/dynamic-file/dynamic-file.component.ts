import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { PeliculasService } from 'src/app/features/peliculas/services/peliculas.service';
import { constants } from '../../../../shared/api.constants';
import { MatDialog } from '@angular/material/dialog';
import { ModalVerificaEliminarComponent } from '../../modals/modal-elimina-tipo/modal-verifica-eliminar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
    selector: 'app-dynamic-file',
    templateUrl: './dynamic-file.component.html',
    styleUrls: ['./dynamic-file.component.css']
})
export class DynamicFileComponent implements OnInit {

    @Input() field: any;
    formName!: FormGroup;
    selectedFileName = '';
    fileName: string | null = '';
    fileServer = constants.API_ARCHIVOS_PELICULA;

    fileTypeConverted = '';
    fileTypeMappings: Record<string, string> = {
        '': 'Cualquier tipo',
        'application/pdf': 'PDF',
        'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOC',
        'text/plain': 'TXT',
        'text/csv': 'CSV',
        'image/*': 'Imagen',
    };

    constructor(
        private loaderService: LoaderService,
        private peliculasService: PeliculasService,
        private formgroupDirective: FormGroupDirective,
        private dialog: MatDialog,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        if (this.field.options.length) {
            this.fileTypeConverted = this.fileTypeMappings[this.field.options[0].value] || '';
        } else {
            this.fileTypeConverted = '';
        }
        this.formName = this.formgroupDirective.control;
    }

    onFileSelected(event: any) {
        this.loaderService.setMessage('Cargando archivo/s');
        const file: File = event.target.files[0];
        if (file) {
            // this.fileName = file.name;
            const formData = new FormData();
            formData.append("file", file);

            const res: any = this.peliculasService.upload(formData)
            if (res.body?.filename) {
                this.fileName = res.body.filename;
                const cont = this.formName.get(this.field.fieldName);
                cont?.setValue(res.body.filename);
                console.log(cont);
            }
        }
    }

    verificaEliminar(field: any) {
        const dialogRef = this.dialog.open(ModalVerificaEliminarComponent, {
            data: {
                mensaje: 'Se eliminará el archivo.',
                titulo: 'Eliminar el archivo?'
            }
        });

        dialogRef.afterClosed().subscribe((result: string) => {
            if (result === 'eliminar') {
                this.onDeleteFile(field);
            }
        });
    }

    async onDeleteFile(field: any) {
        const campoId = +field.fieldName.split('-')[1];
        if (campoId) {
            const result = await this.peliculasService.deleteArchivoCampo(campoId)
            if (result) {
                this.field.value = null;
                this.fileName = null;
                const ctrl = this.formName.get(field.fieldName);
                ctrl?.setValue(null);
                this.snackBar.open('Archivo eliminado', 'Mensaje', {
                    duration: 3000, verticalPosition: 'top'
                });
            } else {
                this.snackBar.open('Error al eliminar el archivo', 'Error', {
                    duration: 3000, verticalPosition: 'top'
                });
            }
        }
    }
}
