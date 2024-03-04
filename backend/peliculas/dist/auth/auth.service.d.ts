import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { RefreshJwt } from './entities/refresh-jwt.entity';
import { JwtUtilService } from './jwt-util/jwt-util.service';
type LoginResponse = {
    accessToken: string;
    refreshToken: string;
};
export declare class AuthService {
    private jwtService;
    private readonly userService;
    private readonly refreshTokenRepository;
    constructor(jwtService: JwtUtilService, userService: UserService, refreshTokenRepository: Repository<RefreshJwt>);
    login(email: string, password: string): Promise<LoginResponse>;
    refresh(refreshToken: string): Promise<Partial<LoginResponse>>;
    logout(refreshToken: string): Promise<string>;
    getNextRefreshToken(id_usuario: number): Promise<RefreshJwt>;
    getJwtTokenData(token: string): import("jsonwebtoken").JwtPayload;
    verifyToken(token: string): boolean;
}
export {};
