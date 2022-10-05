"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuarioRepository_1 = require("../repositories/usuarioRepository");
const bcrypt = require('bcrypt');
class UsuarioController {
    // Criar Usuario
    async create(req, res) {
        var { nome, rg, cpf, endereco, email, telefone, senha, ativo } = req.body;
        const hashedPassword = await bcrypt.hash(req.body.senha, 15);
        try {
            const novoUsuario = usuarioRepository_1.usuarioRepository.create({ nome, rg, cpf, endereco, email, telefone, senha: hashedPassword, ativo });
            await usuarioRepository_1.usuarioRepository.save(novoUsuario);
            return res.status(201).json(novoUsuario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    // Listar todos os usuarios
    async findAll(req, res) {
        try {
            const usuario = await usuarioRepository_1.usuarioRepository.find({
                select: ['id_usuario', 'nome', 'rg', 'cpf', 'endereco', 'email', 'telefone', 'ativo']
            });
            return res.status(200).json(usuario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    // Listar usuarios por id
    async findById(req, res) {
        const { id_usuario } = req.params;
        try {
            const usuario = await usuarioRepository_1.usuarioRepository.find({
                select: ['id_usuario', 'nome', 'rg', 'cpf', 'endereco', 'email', 'telefone', 'ativo'],
                where: {
                    id_usuario: Number(id_usuario)
                }
            });
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            return res.status(200).json(usuario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    // Atualizar usuario
    async update(req, res) {
        const { id_usuario } = req.params;
        const { nome, rg, cpf, endereco, email, telefone, ativo } = req.body;
        try {
            const usuario = await usuarioRepository_1.usuarioRepository.findOneBy({
                id_usuario: Number(id_usuario)
            });
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            usuarioRepository_1.usuarioRepository.update(usuario, { nome, rg, cpf, endereco, email, telefone, ativo });
            return res.status(200).end();
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Sever Error' });
        }
    }
    // Apagar usuario
    async delete(req, res) {
        const { id_usuario } = req.params;
        if (!(await usuarioRepository_1.usuarioRepository.findOneBy({ id_usuario: Number(id_usuario) }))) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        await usuarioRepository_1.usuarioRepository.delete({ id_usuario: Number(id_usuario) });
        return res.status(204).send();
    }
}
exports.UsuarioController = UsuarioController;
