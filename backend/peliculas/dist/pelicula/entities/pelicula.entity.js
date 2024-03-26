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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Pelicula = class Pelicula {
};
exports.Pelicula = Pelicula;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: 'id de pelicula',
        uniqueItems: true
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pelicula.prototype, "id_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Locuras del Emperador',
        description: 'Nombre comerciald e la pelicula',
        uniqueItems: true
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, nullable: false, unique: true }),
    __metadata("design:type", String)
], Pelicula.prototype, "nombre_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Tarantino',
        description: 'Nombre del director',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 350, nullable: false }),
    __metadata("design:type", String)
], Pelicula.prototype, "director_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023',
        description: 'Año estreno pelicula',
    }),
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Pelicula.prototype, "anio_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'url del poster',
        description: 'link de la imagen del poster',
        uniqueItems: true
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 350, nullable: true }),
    __metadata("design:type", String)
], Pelicula.prototype, "poster_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'terror',
        description: 'Genero puede tener valores:  comedia, drama, terror, ficcion y accion',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: false }),
    __metadata("design:type", String)
], Pelicula.prototype, "genero_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: 'Valor booleano para saber si esta activa la pelicula',
    }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false }),
    __metadata("design:type", Boolean)
], Pelicula.prototype, "activo_pelicula", void 0);
exports.Pelicula = Pelicula = __decorate([
    (0, typeorm_1.Entity)('pelicula')
], Pelicula);
//# sourceMappingURL=pelicula.entity.js.map