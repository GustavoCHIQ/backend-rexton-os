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
__export(exports, {
  default: () => routes_default
});
var import_express = __toModule(require("express"));
var import_UsuarioController = __toModule(require("./controllers/UsuarioController"));
var import_ClienteController = __toModule(require("./controllers/ClienteController"));
const routes = (0, import_express.Router)();
routes.post("/usuario", new import_UsuarioController.UsuarioController().create);
routes.get("/usuario", new import_UsuarioController.UsuarioController().list);
routes.get("/usuario/:id_usuario", new import_UsuarioController.UsuarioController().listById);
routes.put("/usuario/:id_usuario", new import_UsuarioController.UsuarioController().update);
routes.delete("/usuario/:id_usuario", new import_UsuarioController.UsuarioController().delete);
routes.post("/cliente", new import_ClienteController.ClienteController().create);
routes.get("/cliente", new import_ClienteController.ClienteController().findAll);
routes.get("/cliente:id_cliente", new import_ClienteController.ClienteController().findById);
routes.put("/cliente:id_cliente", new import_ClienteController.ClienteController().update);
routes.delete("/cliente", new import_ClienteController.ClienteController().delete);
var routes_default = routes;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=routes.js.map
