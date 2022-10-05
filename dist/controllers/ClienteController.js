"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const clienteRepository_1 = require("../repositories/clienteRepository");
class ClienteController {
    // Criar Usuario
    async create(req, res) {
        var { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body;
        try {
            const novoCliente = clienteRepository_1.clienteRepository.create({ nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo });
            await clienteRepository_1.clienteRepository.save(novoCliente);
            return res.status(201).json(novoCliente);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    async findAll(req, res) {
        try {
            const cliente = await clienteRepository_1.clienteRepository.find({});
            if (!cliente) {
                return res.status(404).json({ message: 'Nenhum cliente encontrado !' });
            }
            return res.status(200).json(cliente);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    async findById(req, res) {
        const { id_cliente } = req.params;
        try {
            const cliente = await clienteRepository_1.clienteRepository.find({
                where: {
                    id_cliente: Number(id_cliente)
                }
            });
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }
            return res.status(200).json(cliente);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    async update(req, res) {
        const { id_cliente } = req.params;
        const { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body;
        try {
            const cliente = await clienteRepository_1.clienteRepository.findOneBy({
                id_cliente: Number(id_cliente)
            });
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }
            clienteRepository_1.clienteRepository.update(cliente, { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo });
            return res.status(200).end();
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    async delete(req, res) {
        const { id_cliente } = req.params;
        if (!(await clienteRepository_1.clienteRepository.findOneBy({ id_cliente: Number(id_cliente) }))) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        await clienteRepository_1.clienteRepository.delete({ id_cliente: Number(id_cliente) });
        return res.status(204).send();
    }
}
exports.ClienteController = ClienteController;
