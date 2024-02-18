import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ReportesService } from '../../services/reportes.service';
import { Reporte } from 'src/app/shared/models/reporte.model';
import { map } from 'rxjs';
// import { ProcesoService } from 'src/app/features/proceso/services/proceso.service';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
    selector: 'app-add-reportes',
    templateUrl: './add-reportes.component.html',
    styleUrls: ['./add-reportes.component.css']
})
export class AddReportesComponent {

    form: FormGroup = new FormGroup({
        codigo_reporte: new FormControl(null, [Validators.required]),
        nombre_reporte: new FormControl(null, [Validators.required]),
        tipoProceso: new FormControl(null, [Validators.required]),
        descripcion_reporte: new FormControl(null),
        estado_reporte: new FormControl(true, [Validators.required]),
        ruta_reporte: new FormControl(null, [Validators.required]),
	});
    fileName = '';
    // tipoProceso$ = this.procesoServicio.getTipoProcesos()
    //     .pipe(
    //         map( (res: any) => res.data )
    //     );


    constructor(
        private loaderService: LoaderService,
        private readonly reporteServicio: ReportesService,
        // private readonly procesoServicio: ProcesoService,
        private router: Router
    ) {}

    // crearReporte() {
    //     this.loaderService.setMessage('Creando reporte');
    //     const reporte: Partial<Reporte> = {
    //         codigo_reporte: this.form.value.codigo_reporte,
    //         nombre_reporte: this.form.value.nombre_reporte,
    //         descripcion_reporte: this.form.value.descripcion_reporte,
    //         estado_reporte: this.form.value.estado_reporte,
    //         ruta_reporte: this.form.value.ruta_reporte,
    //         fk_id_tipo_proceso: +this.form.value.tipoProceso
    //     };

		// this.reporteServicio.postCrearReporte(reporte)
		// 	.subscribe({
    //             next: (res) => { this.router.navigate(['reportes']) },
    //             error: (error) => console.error(error)
    //         });
    // }

    // onFileSelected(event: any) {
    //     const file:File = event.target.files[0];
    //     if (file) {
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         this.reporteServicio.upload(formData).subscribe({
    //             next: (res: any) => {
    //                 if ( res.body?.filename ) {
    //                     this.fileName = res.body.filename;
    //                     const cont = this.form.get('ruta_reporte');
    //                     cont?.setValue(res.body.filename);
    //                 }
    //             }
    //         })
    //     }
    // }

}
