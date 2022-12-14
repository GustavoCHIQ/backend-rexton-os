import { Request, Response } from 'express'
import { clienteRepository } from '../repositories/clienteRepository'

export class ClienteController {
  // Criar Usuario
  async create(req: Request, res: Response) {
    const { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body

    try {
      const cliente = await clienteRepository.save({ nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo })

      return res.status(201).json({ message: 'Cliente criado com sucesso' })
    } catch (error) {
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Buscar todos clientes
  async findAll(req: Request, res: Response) {
    try {
      const clientes = await clienteRepository.find()

      if (clientes.length === 0) {
        return res.status(404).json({ message: 'Nenhum cliente encontrado' })
      } else {
        return res.status(200).json(clientes)
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Buscar clientes por id
  async findById(req: Request, res: Response) {
    const { id_cliente } = req.params;

    try {
      const cliente = await clienteRepository.find({
        where: {
          id_cliente: Number(id_cliente)
        }
      })

      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' })
      }
      return res.status(200).json(cliente)
    } catch (error) {
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Atualizar cliente
  async update(req: Request, res: Response) {
    const { id_cliente } = req.params;
    const { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body

    try {

      if (!(await clienteRepository.findOneBy({ id_cliente: Number(id_cliente) }))) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      await clienteRepository.update({ id_cliente: Number(id_cliente) }, { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo })

      return res.status(204).json({ message: 'Cliente atualizado com sucesso' })
    } catch (error) {
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  // Deletar Cliente
  async delete(req: Request, res: Response) {
    const { id_cliente } = req.params;

    try {

      if (!(await clienteRepository.findOneBy({ id_cliente: Number(id_cliente) }))) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      await clienteRepository.delete({ id_cliente: Number(id_cliente) })

      return res.status(204).json({ message: 'Cliente deletado com sucesso' })
    } catch (error) {
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }
}