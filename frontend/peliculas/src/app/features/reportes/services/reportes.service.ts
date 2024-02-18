import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { constants } from 'src/app/shared/api.constants';
import { Reporte } from 'src/app/shared/models/reporte.model';

@Injectable({
    providedIn: 'root'
})
export class ReportesService {

    constructor(
        private http: HttpClient, 
    ) { }

    // getReportes(
    //     filter: string = '',
    //     sort: string = 'asc',
    //     sortColumn: string = 'id_reporte',
    //     pageNumber: number = 0,
    //     pageSize: number = 10
    // ): Observable<Reporte[]> {
    //     return this.http
    //         .get<Reporte[]>(constants.API_REPORTES, {
    //             params: new HttpParams()
    //                 .set('filter', filter)
    //                 .set('sort', sort)
    //                 .set('sortColumn', sortColumn)
    //                 .set('pageNumber', pageNumber.toString())
    //                 .set('pageSize', pageSize.toString()),
    //         })
    //         .pipe(
    //             tap( console.log ),
    //             catchError( (error) => of(error))
    //         );
    // }

    // postCrearReporte(reporte: Partial<Reporte>) {
    //     return this.http
    //         .post<any>(constants.API_REPORTES, { ...reporte })
    //         .pipe(
    //             tap( console.log ),
    //             catchError( (error) => of(error))
    //         );
    // }

    // getEjecutarReporte(reporte: Partial<Reporte>, proceso: Partial<Proceso>) {
    //     return this.http
    //         .post<any>(constants.API_REPORTES + '/ejecutar', { reporte, proceso })
    //         .pipe(
    //             catchError( (error) => of(error))
    //         );
    // }

    // upload(formData: any) {
		// return this.http.post<any>(
		// 	constants.API_PROCESO + '/uploadReporte',
		// 	formData,
		// 	{ reportProgress: false, observe: 'events' }
		// );
	// }


    
    // getListaReportesPorProceso(proceso: Proceso) {
    //     return this.http
    //         .post<any>(constants.API_REPORTES + '/listaReporteProceso', proceso)
    //         .pipe(
    //             tap( console.log ),
    //             catchError( (error) => of(error))
    //         );
    // }

}
