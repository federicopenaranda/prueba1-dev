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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "primer_nombre_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "segundo_nombre_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_paterno_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_materno_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "codigo_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "login_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, select: false }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_nacimiento_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "telefono_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "celular_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 245, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "correo_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "direccion_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "imagen_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "observaciones_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "acceso_ip_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "empresa_usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_creacion_usuario", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuario')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map