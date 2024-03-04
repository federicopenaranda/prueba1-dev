import { CreateUserDto } from './dto/create-user.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { PaginatedUserDto, QueryUserDto } from './dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<Usuario>);
    findUserByEmail(email: string): Promise<Usuario>;
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
    getUser(id: number): Promise<Usuario>;
    getAllUser(query: QueryUserDto): Promise<PaginatedUserDto>;
    verifyNewUserEmail(email: string): Promise<boolean>;
}
