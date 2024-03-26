import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshJwtDto } from './dto/refresh-jwt.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(body: RefreshJwtDto): Promise<Partial<{
        accessToken: string;
        refreshToken: string;
    }>>;
    logout(body: RefreshJwtDto): Promise<string>;
    verifyToken(body: RefreshJwtDto): boolean;
}
