import { Request, Response } from 'express'
import { usuarioRepository } from '../repositories/usuarioRepository'
const bcrypt = require('bcrypt')

export class UsuarioController {
  // Criar Usuario
  async create(req: Request, res: Response) {
    var { nome, rg, cpf, endereco, email, telefone, senha, ativo } = req.body

    const hashedPassword = await bcrypt.hash(senha, 15)

    try {
      const novoUsuario = usuarioRepository.create({ nome, rg, cpf, endereco, email, telefone, senha: hashedPassword, ativo })
      await usuarioRepository.save(novoUsuario)

      return res.status(201).json({ message: 'Usuário criado com sucesso' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Listar todos os usuarios
  async findAll(req: Request, res: Response) {
    try {
      const usuario = await usuarioRepository.find({
        select: ['id_usuario', 'nome', 'rg', 'cpf', 'endereco', 'email', 'telefone', 'ativo']
      })

      return res.status(200).json(usuario)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Listar usuarios por id
  async findById(req: Request, res: Response) {
    const { id_usuario } = req.params;

    try {
      const usuario = await usuarioRepository.find({
        select: ['id_usuario', 'nome', 'rg', 'cpf', 'endereco', 'email', 'telefone', 'ativo', 'createdAt'],
        where: {
          id_usuario: Number(id_usuario)
        }
      })

      if (usuario.length === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      return res.status(200).json(usuario)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Atualizar usuario
  async update(req: Request, res: Response) {
    const { id_usuario } = req.params;
    const { nome, rg, cpf, endereco, telefone, ativo } = req.body

    const usuario = await usuarioRepository.findOneBy({ id_usuario: Number(id_usuario) })

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    await usuarioRepository.update({ id_usuario: Number(id_usuario) }, { nome, rg, cpf, endereco, telefone, ativo })

    return res.status(204).send()
  }

  // Apagar usuario
  async delete(req: Request, res: Response) {
    const { id_usuario } = req.params;

    if (!(await usuarioRepository.findOneBy({ id_usuario: Number(id_usuario) }))) {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    await usuarioRepository.delete({ id_usuario: Number(id_usuario) })

    return res.status(204).send()
  }

  async updatePass(req: Request, res: Response) {
    const { id_usuario } = req.params;
    const { senha } = req.body

    const usuario = await usuarioRepository.findOneBy({ id_usuario: Number(id_usuario) })

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    const hashedPassword = await bcrypt.hash(senha, 15)
    await usuarioRepository.update({ id_usuario: Number(id_usuario) }, { senha: hashedPassword })
    return res.status(204).send()
  }
}