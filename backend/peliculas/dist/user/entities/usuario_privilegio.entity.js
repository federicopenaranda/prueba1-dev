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
exports.UsuarioPrivilegio = void 0;
const typeorm_1 = require("typeorm");
let UsuarioPrivilegio = class UsuarioPrivilegio {
};
exports.UsuarioPrivilegio = UsuarioPrivilegio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuarioPrivilegio.prototype, "id_usuario_privilegio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: false }),
    __metadata("design:type", String)
], UsuarioPrivilegio.prototype, "nombre_privilegio_usuario_privilegio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: false }),
    __metadata("design:type", String)
], UsuarioPrivilegio.prototype, "accion_usuario_privilegio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: true }),
    __metadata("design:type", String)
], UsuarioPrivilegio.prototype, "opciones_usuario_privilegio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: true }),
    __metadata("design:type", String)
], UsuarioPrivilegio.prototype, "funcion_usuario_privilegio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 145, nullable: true }),
    __metadata("design:type", String)
], UsuarioPrivilegio.prototype, "descripcion_usuario_privilegio", void 0);
exports.UsuarioPrivilegio = UsuarioPrivilegio = __decorate([
    (0, typeorm_1.Entity)('usuario_privilegio')
], UsuarioPrivilegio);
//# sourceMappingURL=usuario_privilegio.entity.js.map