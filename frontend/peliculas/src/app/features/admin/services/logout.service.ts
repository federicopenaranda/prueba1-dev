import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

import { constants } from '../../../shared/api.constants';
import { httpOptions } from '../../../shared/utils/app.utils';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LogoutService {
	constructor(
		private http: HttpClient
	) {}

	async logOut() {
		localStorage.removeItem('peliculasLogin');
		localStorage.removeItem('peliculasAccess');
		localStorage.removeItem('peliculasRefresh');
		localStorage.removeItem('peliculasRole');
		return firstValueFrom(this.http.delete<any>(constants.API_LOGOUT, httpOptions).pipe(
			tap((res: any) => console.log(`Logout result: ${res}`))
		));
	}
}
