"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtUtilService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let JwtUtilService = class JwtUtilService {
    getTokenData(validToken) {
        return (0, jsonwebtoken_1.decode)(validToken.replace('Bearer ', ''), { json: true });
    }
};
exports.JwtUtilService = JwtUtilService;
exports.JwtUtilService = JwtUtilService = __decorate([
    (0, common_1.Injectable)()
], JwtUtilService);
//# sourceMappingURL=jwt-util.service.js.map