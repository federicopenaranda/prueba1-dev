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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findUserByEmail(email) {
        const user = await this.userRepository
            .createQueryBuilder('i')
            .select(['i.id_usuario', 'i.primer_nombre_usuario', 'i.apellido_paterno_usuario', 'i.correo_usuario', 'i.contrasena_usuario'])
            .where('i.correo_usuario = :email', { email })
            .getOne();
        if (!user)
            throw new common_1.NotFoundException('No user found');
        console.log(user);
        return user;
    }
    async createUser(dto) {
        try {
            dto.correo_usuario = dto.correo_usuario.trim().toLowerCase();
            const user = this.userRepository.create(dto);
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(dto.contrasena_usuario, saltOrRounds);
            user.contrasena_usuario = hash;
            const { contrasena_usuario, ...rest } = await this.userRepository.save(user);
            return rest;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getUser(id) {
        const user = await this.userRepository.findOne({ where: { id_usuario: id } });
        if (!user)
            throw new common_1.NotFoundException('User do not exist.');
        return user;
    }
    async getAllUser(query) {
        let userTotal = 0;
        if (query.filter) {
            userTotal = await this.userRepository
                .createQueryBuilder('user')
                .where(`LOWER("user"."primer_nombre_usuario") LIKE '%${query.filter.toLowerCase()}%'`)
                .orWhere(`LOWER("user"."correo_usuario") LIKE '%${query.filter.toLowerCase()}%'`)
                .getCount();
        }
        else {
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
    async verifyNewUserEmail(email) {
        try {
            const res = await this.findUserByEmail(email);
            if (!res)
                return true;
            return false;
        }
        catch (error) {
            return true;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map