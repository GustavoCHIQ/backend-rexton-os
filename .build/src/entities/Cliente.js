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
  Cliente: () => Cliente
});
var import_typeorm = __toModule(require("typeorm"));
let Cliente = class {
  constructor() {
    this.createdAt = Date;
    this.updatedAt = Date;
  }
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)({ primaryKeyConstraintName: "pk_id_cliente" })
], Cliente.prototype, "id_cliente", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "cpf", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "endereco", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "cidade", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "estado", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "telefone", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], Cliente.prototype, "dataNascimento", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "boolean", default: true })
], Cliente.prototype, "ativo", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], Cliente.prototype, "createdAt", 2);
__decorateClass([
  (0, import_typeorm.UpdateDateColumn)()
], Cliente.prototype, "updatedAt", 2);
Cliente = __decorateClass([
  (0, import_typeorm.Entity)("clientes")
], Cliente);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cliente
});
//# sourceMappingURL=Cliente.js.map
