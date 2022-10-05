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
exports.OrdemDeServico = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
const Funcionario_1 = require("./Funcionario");
const Servico_1 = require("./Servico");
let OrdemDeServico = class OrdemDeServico {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ primaryKeyConstraintName: 'pk_id_os' }),
    __metadata("design:type", Number)
], OrdemDeServico.prototype, "id_os", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Cliente_1.Cliente),
    (0, typeorm_1.JoinColumn)({ name: 'id_cliente', foreignKeyConstraintName: 'fk_id_cliente' }),
    __metadata("design:type", Cliente_1.Cliente)
], OrdemDeServico.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Funcionario_1.Funcionario),
    (0, typeorm_1.JoinColumn)({ name: 'id_funcionario', foreignKeyConstraintName: 'fk_id_funcionario' }),
    __metadata("design:type", Funcionario_1.Funcionario)
], OrdemDeServico.prototype, "funcionario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Servico_1.Servico, servico => servico.os),
    __metadata("design:type", Array)
], OrdemDeServico.prototype, "servicos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrdemDeServico.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrdemDeServico.prototype, "updatedAt", void 0);
OrdemDeServico = __decorate([
    (0, typeorm_1.Entity)('ordemdeservicos')
], OrdemDeServico);
exports.OrdemDeServico = OrdemDeServico;
