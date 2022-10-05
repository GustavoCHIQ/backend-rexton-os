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
  UsuarioController: () => UsuarioController
});
var import_usuarioRepository = __toModule(require("../repositories/usuarioRepository"));
const bcrypt = require("bcrypt");
class UsuarioController {
  async create(req, res) {
    var { nome, rg, cpf, endereco, email, telefone, senha, ativo } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.senha, 15);
    try {
      const novoUsuario = import_usuarioRepository.usuarioRepository.create({ nome, rg, cpf, endereco, email, telefone, senha: hashedPassword, ativo });
      await import_usuarioRepository.usuarioRepository.save(novoUsuario);
      return res.status(201).json(novoUsuario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async list(req, res) {
    try {
      const usuario = await import_usuarioRepository.usuarioRepository.find({
        select: ["id_usuario", "nome", "rg", "cpf", "endereco", "email", "telefone", "ativo"]
      });
      return res.status(200).json(usuario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async listById(req, res) {
    const { id_usuario } = req.params;
    try {
      const usuario = await import_usuarioRepository.usuarioRepository.find({
        select: ["id_usuario", "nome", "rg", "cpf", "endereco", "email", "telefone", "ativo"],
        where: {
          id_usuario: Number(id_usuario)
        }
      });
      if (!usuario) {
        return res.status(404).json({ message: "Usu\xE1rio n\xE3o encontrado" });
      }
      return res.status(200).json(usuario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async update(req, res) {
    const { id_usuario } = req.params;
    const { nome, rg, cpf, endereco, email, telefone, ativo } = req.body;
    try {
      const usuario = await import_usuarioRepository.usuarioRepository.findOneBy({
        id_usuario: Number(id_usuario)
      });
      if (!usuario) {
        return res.status(404).json({ message: "Usu\xE1rio n\xE3o encontrado" });
      }
      import_usuarioRepository.usuarioRepository.update(usuario, { nome, rg, cpf, endereco, email, telefone, ativo });
      return res.status(200).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async delete(req, res) {
    const { id_usuario } = req.params;
    if (!await import_usuarioRepository.usuarioRepository.findOneBy({ id_usuario: Number(id_usuario) })) {
      return res.status(404).json({ message: "Usu\xE1rio n\xE3o encontrado" });
    }
    await import_usuarioRepository.usuarioRepository.delete({ id_usuario: Number(id_usuario) });
    return res.status(204).send();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UsuarioController
});
//# sourceMappingURL=UsuarioController.js.map
