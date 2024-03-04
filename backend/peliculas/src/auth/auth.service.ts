import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sign, verify } from 'jsonwebtoken';
import { UserService } from '../user/user.service';
import { EntityNotFoundError, Repository } from 'typeorm';
import { RefreshJwt } from './entities/refresh-jwt.entity';
import * as bcrypt from 'bcrypt';
import { JwtUtilService } from './jwt-util/jwt-util.service';

type LoginResponse = {
    accessToken: string;
    refreshToken: string;
};

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtUtilService,
		private readonly userService: UserService,
		@InjectRepository(RefreshJwt)
		private readonly refreshTokenRepository: Repository<RefreshJwt>
	) {}

	async login(email: string, password: string): Promise<LoginResponse> {
		const user = await this.userService.findUserByEmail(email);
		const isMatch = await bcrypt.compare(password, user.contrasena_usuario);
		if (!isMatch) throw new UnauthorizedException('Wrong password');
		const newRefreshToken = await this.getNextRefreshToken(user.id_usuario);
		const tokenPayload = {
			id_usuario: user.id_usuario
		};
		const accessToken = sign(
			tokenPayload,
			process.env.JWT_ACCESS_SECRET,
			{ expiresIn: '30m' }
		);
		return {
			accessToken,
			refreshToken: newRefreshToken.refresh_token
		};
	}

	async refresh(refreshToken: string): Promise<Partial<LoginResponse>> {
		const decodedRefresh = verify(refreshToken, process.env.JWT_REFRESH_SECRET);
		if (typeof decodedRefresh === 'string') throw new Error('Invalid Refresh token');
		const tokenPayload = {
			id_usuario: decodedRefresh.id_usuario
		};
		return {
			accessToken: sign(
				tokenPayload,
				process.env.JWT_ACCESS_SECRET,
				{ expiresIn: '30m' }
			),
		};
	}

	async logout(refreshToken: string): Promise<string> {
		const decodedRefresh = verify(refreshToken, process.env.JWT_REFRESH_SECRET);
		if (typeof decodedRefresh === 'string') throw new Error('Invalid Refresh token');
		const refreshTokenDb = await this.refreshTokenRepository.findOne({
			where: {
				refresh_token: refreshToken,
				id_usuario: decodedRefresh.id_usuario,
			},
		});
		if (!refreshTokenDb) throw new EntityNotFoundError(RefreshJwt, 'Token do not exist.');
		this.refreshTokenRepository.delete({ id_refresh_token: refreshTokenDb.id_refresh_token });
		return 'Successfull logout';
	}

	async getNextRefreshToken(id_usuario: number): Promise<RefreshJwt> {
		const tokenPayload ={
			id_usuario
		};
		const newRefreshToken = sign(
			tokenPayload,
			process.env.JWT_REFRESH_SECRET,
			{ expiresIn: '1h' }
		);
		const dto: RefreshJwt = {
			refresh_token: newRefreshToken,
			id_usuario,
		};
		const newRefreshTokenRec = this.refreshTokenRepository.create(dto);
		const refreshTokenDb = await this.refreshTokenRepository.save(newRefreshTokenRec);
		return refreshTokenDb;
	}

	getJwtTokenData(token: string) {
		return this.jwtService.getTokenData(token);
	}

	verifyToken(token: string): boolean {
		try {
			const decodedRefresh = verify(token, process.env.JWT_ACCESS_SECRET);
			if (typeof decodedRefresh === 'string') {
				return false;
			}
			return true;
		}
		catch(e) {
			return false;
		}
	}
}
