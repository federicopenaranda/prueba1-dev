import { Body, Controller, Delete, UseGuards, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshJwtDto } from './dto/refresh-jwt.dto';
//import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	login(@Body() body: LoginDto) {
		return this.authService.login(body.email, body.password);
	}

	@Post('refresh')
	refresh(@Body() body: RefreshJwtDto) {
		return this.authService.refresh(body.refreshToken);
	}

	// @UseGuards(JwtAuthGuard)
	@Delete('logout')
	logout(@Body() body: RefreshJwtDto) {
		return this.authService.logout(body.refreshToken);
	}

	@Post('verify-token')
	verifyToken(@Body() body: RefreshJwtDto) {
		return this.authService.verifyToken(body.refreshToken);
	}
}
