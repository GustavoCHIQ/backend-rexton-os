import { Request, Response } from 'express'
import { ordemDeServicoRepository } from '../repositories/ordemDeServicoRepository'

export class OrdemDeServicoController {
    // Criar Ordem De Servico
    async create(req: Request, res: Response) {
        const { cliente, funcionario, servico } = req.body

        try {
            const novaOrdemDeServico = await ordemDeServicoRepository.save({ cliente, funcionario, servico })

            return res.status(201).json({ message: 'Ordem De Servico criada com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Buscar todos Ordem De Servico
    async findAll(req: Request, res: Response) {
        try {
            const ordemDeServico = await ordemDeServicoRepository.find({
                relations: ['cliente', 'funcionario', 'servico']
            })

            if (ordemDeServico.length === 0) {
                return res.status(404).json({ message: 'Ordem De Servico não encontrada' })
            }

            return res.status(200).json(ordemDeServico)
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Buscar Ordem De Servico por id
    async findById(req: Request, res: Response) {
        const { id_os } = req.params

        try {
            const servico = await ordemDeServicoRepository.find({
                relations: ['cliente', 'funcionario', 'servico'],
                where: {
                    id_os: Number(id_os)
                }
            })

            if (servico.length === 0) {
                return res.status(404).json({ message: 'Ordem De Servico não encontrada' })
            }

            return res.status(200).json(servico)
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Atualizar Ordem De Servico
    async update(req: Request, res: Response) {
        const { id_os } = req.params
        const { cliente, funcionario, servico } = req.body

        try {
            const ordemDeServico = await ordemDeServicoRepository.findOneBy({
                id_os: Number(id_os)
            })

            if (!ordemDeServico) {
                return res.status(404).json({ message: 'Ordem De Servico não encontrada' })
            }

            await ordemDeServicoRepository.update({ id_os: Number(id_os) }, { cliente, funcionario, servico })

            return res.status(200).json({ message: 'Ordem De Servico atualizada com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Deletar Ordem De Servico
    async delete(req: Request, res: Response) {
        const { id_os } = req.params

        try {
            const ordemDeServico = await ordemDeServicoRepository.findOneBy({
                id_os: Number(id_os)
            })

            if (!ordemDeServico) {
                return res.status(404).json({ message: 'Ordem De Servico não encontrada' })
            }

            await ordemDeServicoRepository.delete({ id_os: Number(id_os) })

            return res.status(200).json({ message: 'Ordem De Servico deletada com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}