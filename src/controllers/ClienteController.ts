import { Request, Response } from 'express'
import { clienteRepository } from '../repositories/clienteRepository'

export class ClienteController {
  // Criar Usuario
  async create(req: Request, res: Response) {

    var { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body;

    try {
      const novoCliente = clienteRepository.create({ nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo })

      await clienteRepository.save(novoCliente)

      return res.status(201).json(novoCliente)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const cliente = await clienteRepository.find({})

      if (!cliente) {
        return res.status(404).json({ message: 'Nenhum cliente encontrado !' })
      }

      return res.status(200).json(cliente)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

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
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async update(req: Request, res: Response) {
    const { id_cliente } = req.params;
    const { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo } = req.body

    try {
      const cliente: any = await clienteRepository.findOneBy({
        id_cliente: Number(id_cliente)
      })

      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' })
      }

      clienteRepository.update(cliente, { nome, cpf, endereco, cidade, estado, telefone, email, dataNascimento, ativo });

      return res.status(200).end()
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async delete(req: Request, res: Response) {
    const { id_cliente } = req.params;


    if (!(await clienteRepository.findOneBy({ id_cliente: Number(id_cliente) }))) {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    await clienteRepository.delete({ id_cliente: Number(id_cliente) })

    return res.status(204).send()
  }
}