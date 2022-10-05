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
exports.Servico = void 0;
const typeorm_1 = require("typeorm");
const OrdemDeServico_1 = require("./OrdemDeServico");
let Servico = class Servico {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ primaryKeyConstraintName: 'pk_id_servico' }),
    __metadata("design:type", Number)
], Servico.prototype, "id_servico", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Servico.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Servico.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrdemDeServico_1.OrdemDeServico, os => os.servicos),
    __metadata("design:type", OrdemDeServico_1.OrdemDeServico)
], Servico.prototype, "os", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Servico.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Servico.prototype, "updatedAt", void 0);
Servico = __decorate([
    (0, typeorm_1.Entity)('servicos')
], Servico);
exports.Servico = Servico;