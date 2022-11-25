import { Request, Response } from 'express'
import { usuarioRepository } from '../repositories/usuarioRepository'
const bcrypt = require('bcrypt')

export class UsuarioController {
  // Criar Usuario
  async create(req: Request, res: Response) {
    var { nome, rg, cpf, endereco, email, telefone, senha, ativo } = req.body

    const hashedPassword = await bcrypt.hash(senha, 15)

    try {
      const novoUsuario = usuarioRepository.save({ nome, rg, cpf, endereco, email, telefone, senha: hashedPassword, ativo })

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

      if (!usuario) {
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

    try {
      if (!await usuarioRepository.findOneBy({ id_usuario: Number(id_usuario) })) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      await usuarioRepository.update({ id_usuario: Number(id_usuario) }, { nome, rg, cpf, endereco, telefone, ativo })

      return res.status(204).json({ message: 'Usuário atualizado com sucesso' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Apagar usuario
  async delete(req: Request, res: Response) {
    const { id_usuario } = req.params;

    try {
      if (!(await usuarioRepository.findOneBy({ id_usuario: Number(id_usuario) }))) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      await usuarioRepository.delete({ id_usuario: Number(id_usuario) })

      return res.status(204).send()
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // atulizar senha
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

  async loginUsuario(req: Request, res: Response) {
    const { email, senha } = req.body

    try {

      if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' })
      }

      const usuario = await usuarioRepository.findOneBy({
        email: email
      })

      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      const validPassword = await bcrypt.compare(senha, usuario.senha)

      if (!validPassword) {
        return res.status(401).json({ message: 'Senha incorreta' })
      }

      return res.status(200).json({ message: 'Login realizado com sucesso' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }
}