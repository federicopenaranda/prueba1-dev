import { Usuario } from '../entities/usuario.entity';
export declare class PaginatedUserDto {
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    data: Usuario[];
}
