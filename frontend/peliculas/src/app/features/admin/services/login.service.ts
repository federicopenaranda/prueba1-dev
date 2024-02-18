import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { constants } from '../../../shared/api.constants';
import { UtilsService, httpOptions } from '../../../shared/services/utils.service';
import { LoginResponse } from '../../admin/components/login/login.type';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(
        private http: HttpClient,
        private utilsService: UtilsService
    ) { }

    registerSuccessfulLogin(jwtData: LoginResponse): void {
        localStorage.setItem('peliculasLogin', 'OK');
        localStorage.setItem('peliculasAccess', jwtData.accessToken);
        localStorage.setItem('peliculasRefresh', jwtData.refreshToken);
    }

    isLogged(): boolean {
        return localStorage.getItem('peliculasLogin') === 'OK';
    }

    getUserRole(): string {
        return localStorage.getItem('peliculasRole') || '';
    }

    loginJwt(email: string, password: string) {
        return this.http.post<LoginResponse>(constants.API_LOGIN, { email, password }, httpOptions)
            .pipe(
                tap((res: LoginResponse) => this.utilsService.log(`Login result: ${res}`)),
                catchError(this.utilsService.handleError<LoginResponse>('login'))
            );
    }

    getAccessToken(): string {
        return localStorage.getItem('peliculasAccess') || '';
    }

    isAccessTokenValid() {
        if (!localStorage.getItem('peliculasAccess')) {
            return of(false);
        } else {
            return this.http.post<boolean>(
                constants.API_VERIFY_ACCESS_TOKEN,
                { refreshToken: this.getAccessToken() },
                httpOptions
            )
            .pipe(
                catchError(this.utilsService.handleError<unknown>('verify-token'))
            );
        }
    }

    logOut() {
        localStorage.removeItem('peliculasLogin');
        localStorage.removeItem('peliculasAccess');
        localStorage.removeItem('peliculasRefresh');
        // localStorage.removeItem('peliculasRole');
		return this.http.delete<boolean>(constants.API_LOGOUT, httpOptions)
            .pipe(
                tap((res) => console.log(`Logout result: ${res}`))
            );
	}


}
