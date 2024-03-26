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
exports.CreatePeliculaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePeliculaDto {
}
exports.CreatePeliculaDto = CreatePeliculaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de Pelicula (unique)',
        nullable: false,
        minLength: 1
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePeliculaDto.prototype, "nombre_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Director Pelicula',
        nullable: false,
        minLength: 1
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePeliculaDto.prototype, "director_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Año Pelicula',
        nullable: false,
        minLength: 1
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreatePeliculaDto.prototype, "anio_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Poster de pelicula',
        nullable: false,
        minLength: 1
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePeliculaDto.prototype, "poster_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Genero Pelicula existen : drama, comedia, terror ficcion, accion',
        nullable: false,
        minLength: 1
    }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsIn)(['comedia', 'drama', 'terror', 'ficcion ', 'accion']),
    __metadata("design:type", String)
], CreatePeliculaDto.prototype, "genero_pelicula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Activo Pelicula',
        nullable: false,
        minLength: 1
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePeliculaDto.prototype, "activo_pelicula", void 0);
//# sourceMappingURL=create-pelicula.dto.js.map