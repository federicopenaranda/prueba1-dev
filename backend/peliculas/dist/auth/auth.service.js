"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const refresh_jwt_entity_1 = require("./entities/refresh-jwt.entity");
const bcrypt = require("bcrypt");
const jwt_util_service_1 = require("./jwt-util/jwt-util.service");
let AuthService = class AuthService {
    constructor(jwtService, userService, refreshTokenRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.refreshTokenRepository = refreshTokenRepository;
    }
    async login(email, password) {
        const user = await this.userService.findUserByEmail(email);
        const isMatch = await bcrypt.compare(password, user.contrasena_usuario);
        if (!isMatch)
            throw new common_1.UnauthorizedException('Wrong password');
        const newRefreshToken = await this.getNextRefreshToken(user.id_usuario);
        const tokenPayload = {
            id_usuario: user.id_usuario
        };
        const accessToken = (0, jsonwebtoken_1.sign)(tokenPayload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
        return {
            accessToken,
            refreshToken: newRefreshToken.refresh_token
        };
    }
    async refresh(refreshToken) {
        const decodedRefresh = (0, jsonwebtoken_1.verify)(refreshToken, process.env.JWT_REFRESH_SECRET);
        if (typeof decodedRefresh === 'string')
            throw new Error('Invalid Refresh token');
        const tokenPayload = {
            id_usuario: decodedRefresh.id_usuario
        };
        return {
            accessToken: (0, jsonwebtoken_1.sign)(tokenPayload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' }),
        };
    }
    async logout(refreshToken) {
        const decodedRefresh = (0, jsonwebtoken_1.verify)(refreshToken, process.env.JWT_REFRESH_SECRET);
        if (typeof decodedRefresh === 'string')
            throw new Error('Invalid Refresh token');
        const refreshTokenDb = await this.refreshTokenRepository.findOne({
            where: {
                refresh_token: refreshToken,
                id_usuario: decodedRefresh.id_usuario,
            },
        });
        if (!refreshTokenDb)
            throw new typeorm_2.EntityNotFoundError(refresh_jwt_entity_1.RefreshJwt, 'Token do not exist.');
        this.refreshTokenRepository.delete({ id_refresh_token: refreshTokenDb.id_refresh_token });
        return 'Successfull logout';
    }
    async getNextRefreshToken(id_usuario) {
        const tokenPayload = {
            id_usuario
        };
        const newRefreshToken = (0, jsonwebtoken_1.sign)(tokenPayload, process.env.JWT_REFRESH_SECRET, { expiresIn: '1h' });
        const dto = {
            refresh_token: newRefreshToken,
            id_usuario,
        };
        const newRefreshTokenRec = this.refreshTokenRepository.create(dto);
        const refreshTokenDb = await this.refreshTokenRepository.save(newRefreshTokenRec);
        return refreshTokenDb;
    }
    getJwtTokenData(token) {
        return this.jwtService.getTokenData(token);
    }
    verifyToken(token) {
        try {
            const decodedRefresh = (0, jsonwebtoken_1.verify)(token, process.env.JWT_ACCESS_SECRET);
            if (typeof decodedRefresh === 'string') {
                return false;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(refresh_jwt_entity_1.RefreshJwt)),
    __metadata("design:paramtypes", [jwt_util_service_1.JwtUtilService,
        user_service_1.UserService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map