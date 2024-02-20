import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../login/login.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    @Output() submitEM = new EventEmitter();

    form: FormGroup = new FormGroup({
        email: new FormControl('federicopenaranda@gmail.com', [Validators.required, Validators.email]),
        password: new FormControl('stargate-1', [Validators.required, Validators.minLength(8)]),
    });

    constructor(
        private loaderService: LoaderService,
        private router: Router,
        private loginService: LoginService,
        private snackBar: MatSnackBar
    ) {
        if (this.loginService.isLogged()) {
            // this.router.navigate(['/procesos/exportaciones']);
        }
    }

    async login(): Promise<void> {
        this.loaderService.setMessage('Verificando datos');
        const email = String(this.form.value.email).trim().toLocaleLowerCase();
        const password = this.form.value.password;

        const loginJwtData: LoginResponse = await this.loginService.loginJwt(email, password);

        if (loginJwtData) {
            this.loginService.registerSuccessfulLogin(loginJwtData);
            // this.router.navigate(['/procesos/exportaciones']);
        } else {
            this.openSnackBar();
        }

    }

    openSnackBar() {
        this.snackBar.open('Error en el usuario y contraseña.', 'Error', {
            duration: 3000, verticalPosition: 'top'
        });
    }
}
