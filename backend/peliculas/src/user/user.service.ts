import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { PaginatedUserDto, QueryUserDto } from './dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Usuario)
		private readonly userRepository: Repository<Usuario>,
    ) {}

	async findUserByEmail(email: string): Promise<Usuario> {
		const user = await this.userRepository
			.createQueryBuilder('i')
			.select(['i.id_usuario', 'i.primer_nombre_usuario', 'i.apellido_paterno_usuario', 'i.correo_usuario', 'i.contrasena_usuario'])
			.where('i.correo_usuario = :email', { email })
			.getOne();
		if (!user) throw new NotFoundException('No user found');
		console.log(user)
		return user;
	}
/*
	async findUserById(userId: number): Promise<Usuario> {
		const user = await this.userRepository.findOne({ where: { id_usuario: userId } });
		if (!user) throw new Error('No user found');
		return user;
	}
*/
	async createUser(dto: CreateUserDto) {
		try {
			dto.correo_usuario = dto.correo_usuario.trim().toLowerCase();
			const user = this.userRepository.create(dto);
			const saltOrRounds = 10;
			const hash = await bcrypt.hash(dto.contrasena_usuario, saltOrRounds);
			user.contrasena_usuario = hash;
			const { contrasena_usuario, ...rest } = await this.userRepository.save(user);
			return rest;
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}

	async getUser(id: number): Promise<Usuario> {
		const user = await this.userRepository.findOne({ where: { id_usuario: id } });
		if (!user) throw new NotFoundException('User do not exist.');
		return user;
	}

	async getAllUser(query: QueryUserDto): Promise<PaginatedUserDto> {
		let userTotal = 0;
		if (query.filter) {
			userTotal = await this.userRepository
				.createQueryBuilder('user')
				.where(`LOWER("user"."primer_nombre_usuario") LIKE '%${query.filter.toLowerCase()}%'`)
				.orWhere(`LOWER("user"."correo_usuario") LIKE '%${query.filter.toLowerCase()}%'`)
				.getCount();
		} else {
			userTotal = await this.userRepository.count();
		}

		const users = await this.userRepository
			.createQueryBuilder('user')
			.where(`LOWER("user"."primer_nombre_usuario") LIKE '%${query.filter.toLowerCase()}%'`)
			.orWhere(`LOWER("user"."apellido_paterno_usuario") LIKE '%${query.filter.toLowerCase()}%'`)
			.orWhere(`LOWER("user"."correo_usuario") LIKE '%${query.filter.toLowerCase()}%'`)
			.orderBy(query.sortColumn, query.sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC')
			.offset(+query.pageNumber * +query.pageSize)
			.limit(+query.pageSize)
			.getMany();

		return {
			totalCount: userTotal,
			pageNumber: query.pageNumber,
			pageSize: query.pageSize,
			data: users,
		};
	}

	async verifyNewUserEmail(email: string): Promise<boolean> {
		try {
			const res = await this.findUserByEmail(email);
			if (!res) return true;
			return false
		} catch(error) {
			return true;
		}
	}
}
