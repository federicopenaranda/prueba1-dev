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
exports.PeliculaController = void 0;
const common_1 = require("@nestjs/common");
const pelicula_entity_1 = require("./entities/pelicula.entity");
const pelicula_service_1 = require("./pelicula.service");
const create_pelicula_dto_1 = require("./dto/create-pelicula.dto");
const update_pelicula_dto_1 = require("./dto/update-pelicula.dto");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let PeliculaController = class PeliculaController {
    constructor(peliculaService) {
        this.peliculaService = peliculaService;
    }
    create(createPeliculaDto) {
        return this.peliculaService.create(createPeliculaDto);
    }
    findAll(paginationDto) {
        return this.peliculaService.findAll(paginationDto);
    }
    findOne(id) {
        return this.peliculaService.findOne(+id);
    }
    update(id, updatePeliculaDto) {
        return this.peliculaService.update(+id, updatePeliculaDto);
    }
    remove(id) {
        return this.peliculaService.remove(+id);
    }
};
exports.PeliculaController = PeliculaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pelicula was created', type: pelicula_entity_1.Pelicula }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pelicula_dto_1.CreatePeliculaDto]),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pelicula_dto_1.UpdatePeliculaDto]),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PeliculaController.prototype, "remove", null);
exports.PeliculaController = PeliculaController = __decorate([
    (0, swagger_1.ApiTags)('pelicula'),
    (0, common_1.Controller)('pelicula'),
    __metadata("design:paramtypes", [pelicula_service_1.PeliculaService])
], PeliculaController);
//# sourceMappingURL=pelicula.controller.js.map