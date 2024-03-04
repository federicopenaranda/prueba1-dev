import { CreateUserDto, QueryUserDto } from './dto';
import { UserService } from '../user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUser(query: QueryUserDto): Promise<{
        message: string;
        paginatedUsers: import("./dto").PaginatedUserDto;
    }>;
    verifyNewUserEmail(email: string): Promise<{
        success: boolean;
    }>;
    getUser(id: number): Promise<{
        message: string;
        data: import("./entities/usuario.entity").Usuario[];
    }>;
    createUser(dto: CreateUserDto): Promise<{
        id_usuario: number;
        primer_nombre_usuario: string;
        segundo_nombre_usuario: string;
        apellido_paterno_usuario: string;
        apellido_materno_usuario: string;
        codigo_usuario: string;
        login_usuario: string;
        fecha_nacimiento_usuario: Date;
        telefono_usuario: string;
        celular_usuario: string;
        correo_usuario: string;
        direccion_usuario: string;
        imagen_usuario: number;
        observaciones_usuario: string;
        acceso_ip_usuario: string;
        empresa_usuario: number;
        fecha_creacion_usuario: Date;
    }>;
}
