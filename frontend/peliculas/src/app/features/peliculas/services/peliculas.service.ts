import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, map, of, tap } from 'rxjs';
import { constants } from 'src/app/shared/api.constants';
import { Peliculas } from 'src/app/shared/models/peliculas.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(
    private http: HttpClient, 
  ) {}

  async getPeliculas(
      filter: string = '',
      sort: string = 'asc',
      sortColumn: string = 'id_pelicula',
      pageNumber: number = 0,
      pageSize: number = 10,
      categoria?: string | undefined
  ): Promise<Peliculas[]> {
      console.log(categoria);
      return await firstValueFrom(this.http
          .get<Peliculas[]>(constants.API_PELICULA, {
              params: new HttpParams()
                  .set('filter', filter)
                  .set('sort', sort)
                  .set('sortColumn', sortColumn)
                  .set('pageNumber', pageNumber.toString())
                  .set('pageSize', pageSize.toString())
                  .set('categoria', categoria ? categoria?.toString() : ''),
          })
          .pipe(
              tap( console.log ),
              catchError( (error) => of(error))
          ));
  }

  async getPeliculasDatos(idPelicula: number | undefined): Promise<any> {
      if (idPelicula) {
          return await firstValueFrom(this.http
              .get<any>(constants.API_PELICULA + `/peliculaDatos/${idPelicula}`)
              .pipe(
                  catchError( (error) => of(error))
          ));
      } else {
          return of();
      }
  }

  async postCrearPelicula(pelicula: Partial<Peliculas>): Promise<any> {
      return await firstValueFrom(this.http
          .post<any>(constants.API_PELICULA, pelicula)
          .pipe(
              tap( console.log ),
              catchError( (error) => of(error))
          ));
  }

  async upload(formData: any) {
  return await firstValueFrom(this.http.post<any>(
    constants.API_PELICULA + '/upload',
    formData,
    { reportProgress: false, observe: 'events' }
  ));
  }

  async deleteArchivoCampo(campoId: number): Promise<any> {
      return await firstValueFrom(this.http
          .delete<any>(`${constants.API_PELICULA}/deleteArchivoCampo/${campoId}`)
          .pipe(
              map( (response: any) => response.data ),
              catchError( (error) => of(error))
          ));
  }


}
