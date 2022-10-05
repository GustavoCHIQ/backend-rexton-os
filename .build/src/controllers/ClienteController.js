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
  ClienteController: () => ClienteController
});
var import_clienteRepository = __toModule(require("../repositories/clienteRepository"));
class ClienteController {
  async create(req, res) {
    var { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body;
    try {
      const novoCliente = import_clienteRepository.clienteRepository.create({ nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo });
      await import_clienteRepository.clienteRepository.save(novoCliente);
      return res.status(201).json(novoCliente);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async findAll(req, res) {
    try {
      const cliente = await import_clienteRepository.clienteRepository.find({});
      if (!cliente) {
        return res.status(404).json({ message: "Nenhum cliente encontrado !" });
      }
      return res.status(200).json(cliente);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async findById(req, res) {
    const { id_cliente } = req.params;
    try {
      const cliente = await import_clienteRepository.clienteRepository.find({
        where: {
          id_cliente: Number(id_cliente)
        }
      });
      if (!cliente) {
        return res.status(404).json({ message: "Cliente n\xE3o encontrado" });
      }
      return res.status(200).json(cliente);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async update(req, res) {
    const { id_cliente } = req.params;
    const { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body;
    try {
      const cliente = await import_clienteRepository.clienteRepository.findOneBy({
        id_cliente: Number(id_cliente)
      });
      if (!cliente) {
        return res.status(404).json({ message: "Cliente n\xE3o encontrado" });
      }
      import_clienteRepository.clienteRepository.update(cliente, { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo });
      return res.status(200).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Sever Error" });
    }
  }
  async delete(req, res) {
    const { id_cliente } = req.params;
    if (!await import_clienteRepository.clienteRepository.findOneBy({ id_cliente: Number(id_cliente) })) {
      return res.status(404).json({ message: "Usu\xE1rio n\xE3o encontrado" });
    }
    await import_clienteRepository.clienteRepository.delete({ id_cliente: Number(id_cliente) });
    return res.status(204).send();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClienteController
});
//# sourceMappingURL=ClienteController.js.map
