var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
__export(exports, {
  OrdemDeServico: () => OrdemDeServico
});
var import_typeorm = __toModule(require("typeorm"));
var import_Cliente = __toModule(require("./Cliente"));
var import_Funcionario = __toModule(require("./Funcionario"));
var import_Servico = __toModule(require("./Servico"));
let OrdemDeServico = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)({ primaryKeyConstraintName: "pk_id_os" })
], OrdemDeServico.prototype, "id_os", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_Cliente.Cliente),
  (0, import_typeorm.JoinColumn)({ name: "id_cliente", foreignKeyConstraintName: "fk_id_cliente" })
], OrdemDeServico.prototype, "cliente", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_Funcionario.Funcionario),
  (0, import_typeorm.JoinColumn)({ name: "id_funcionario", foreignKeyConstraintName: "fk_id_funcionario" })
], OrdemDeServico.prototype, "funcionario", 2);
__decorateClass([
  (0, import_typeorm.OneToMany)(() => import_Servico.Servico, (servico) => servico.os)
], OrdemDeServico.prototype, "servicos", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], OrdemDeServico.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm.UpdateDateColumn)()
], OrdemDeServico.prototype, "updatedAt", 2);
OrdemDeServico = __decorateClass([
  (0, import_typeorm.Entity)("ordemdeservicos")
], OrdemDeServico);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OrdemDeServico
});
//# sourceMappingURL=OrdemDeServico.js.map
