import { Usuario } from '../entities/usuario.entity';

export class PaginatedUserDto {
	totalCount: number;
	pageNumber: number;
	pageSize: number;
	data: Usuario[];
}
