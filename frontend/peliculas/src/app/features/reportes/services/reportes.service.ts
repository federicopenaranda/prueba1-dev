import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, of, tap } from 'rxjs';
import { constants } from 'src/app/shared/api.constants';
import { Peliculas } from 'src/app/shared/models/peliculas.model';
import { Reporte } from 'src/app/shared/models/reporte.model';

@Injectable({
    providedIn: 'root'
})
export class ReportesService {

    constructor(
        private http: HttpClient, 
    ) { }

    async getReportes(
        filter: string = '',
        sort: string = 'asc',
        sortColumn: string = 'id_reporte',
        pageNumber: number = 0,
        pageSize: number = 10
    ): Promise<Reporte[]> {
        return await firstValueFrom(this.http
            .get<Reporte[]>(constants.API_REPORTES, {
                params: new HttpParams()
                    .set('filter', filter)
                    .set('sort', sort)
                    .set('sortColumn', sortColumn)
                    .set('pageNumber', pageNumber.toString())
                    .set('pageSize', pageSize.toString()),
            })
            .pipe(
                tap( console.log ),
                catchError( (error) => of(error))
            ));
    }

    async postCrearReporte(reporte: Partial<Reporte>) {
        return await firstValueFrom(this.http
            .post<any>(constants.API_REPORTES, { ...reporte })
            .pipe(
                tap( console.log ),
                catchError( (error) => of(error))
            ));
    }

    async getEjecutarReporte(reporte: Partial<Reporte>, pelicula: Partial<Peliculas>) {
        return await firstValueFrom(this.http
            .post<any>(constants.API_REPORTES + '/ejecutar', { reporte, pelicula })
            .pipe(
                catchError( (error) => of(error))
            ));
    }

    async upload(formData: any) {
		return await firstValueFrom(this.http.post<any>(
			constants.API_PELICULA + '/uploadReporte',
			formData,
			{ reportProgress: false, observe: 'events' }
		));
	}


    
    async getListaReportesPorPelicula(pelicula: Peliculas) {
        return await firstValueFrom(this.http
            .post<any>(constants.API_REPORTES + '/listaReportePelicula', pelicula)
            .pipe(
                tap( console.log ),
                catchError( (error) => of(error))
            ));
    }

}
