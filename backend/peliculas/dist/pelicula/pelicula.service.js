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
exports.PeliculaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pelicula_entity_1 = require("./entities/pelicula.entity");
let PeliculaService = class PeliculaService {
    constructor(peliculaRepository) {
        this.peliculaRepository = peliculaRepository;
        this.logger = new common_1.Logger('PeliculasService');
    }
    async create(createPeliculaDto) {
        try {
            const pelicula = this.peliculaRepository.create(createPeliculaDto);
            await this.peliculaRepository.save(pelicula);
            return pelicula;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        return this.peliculaRepository.find({
            take: limit,
            skip: offset,
        });
    }
    async findOne(id_pelicula) {
        const pelicula = this.peliculaRepository.findOneBy({ id_pelicula });
        if (!pelicula)
            throw new common_1.NotFoundException(`La Pelicula con ${id_pelicula} no se encuentra...`);
        return pelicula;
    }
    async update(id_pelicula, updatePeliculaDto) {
        const pelicula = await this.peliculaRepository.preload({
            id_pelicula: id_pelicula,
            ...updatePeliculaDto
        });
        if (!pelicula)
            throw new common_1.NotFoundException(`Pelicula con id: ${id_pelicula} no se encuentra!!`);
        try {
            await this.peliculaRepository.save(pelicula);
            return pelicula;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async remove(id_pelicula) {
        const pelicula = await this.findOne(id_pelicula);
        await this.peliculaRepository.remove(pelicula);
    }
    handleDBExceptions(error) {
        if (error.code === '23505')
            throw new common_1.BadRequestException(error.detail);
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
exports.PeliculaService = PeliculaService;
exports.PeliculaService = PeliculaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pelicula_entity_1.Pelicula)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PeliculaService);
//# sourceMappingURL=pelicula.service.js.map