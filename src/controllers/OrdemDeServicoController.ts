import { Request, Response } from 'express'
import { ordemDeServicoRepository } from '../repositories/ordemDeServicoRepository'

export class OrdemDeServicoController {
    async create(req: Request, res: Response) {

        const { id_cliente, id_funcionario, servicos } = req.body

        const ordemDeServico = ordemDeServicoRepository.create({
            id_cliente,
            id_funcionario,
            servicos
        })

        await ordemDeServicoRepository.save(ordemDeServico)

        return res.status(201).json(ordemDeServico)
    }

    async findAll(req: Request, res: Response) {
        const ordemDeServicos = await ordemDeServicoRepository.find({
            select: {
                id_os: true,
            }, relations: ['cliente', 'funcionario', 'servicos'],
        })

        return res.json(ordemDeServicos)
    }
}