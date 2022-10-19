import { Request, Response } from "express";
import { servicoRepository } from "../repositories/servicoRepository";

export class ServicoController {
    // Criar Serviço
    async create(req: Request, res: Response) {
        const { descricao, valor } = req.body

        try {
            const novoServico = await servicoRepository.save({ descricao, valor })

            return res.status(201).json({ message: 'Serviço criado com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Buscar todos serviços
    async findAll(req: Request, res: Response) {
        try {
            const servico = await servicoRepository.find({
                select: ['id_servico', 'descricao', 'valor']
            })

            return res.status(200).json(servico)
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Buscar serviços por id
    async findById(req: Request, res: Response) {
        const { id_servico } = req.params;

        try {
            const servico = await servicoRepository.find({
                select: ['id_servico', 'descricao', 'valor'],
                where: {
                    id_servico: Number(id_servico)
                }
            })

            if (!servico) {
                return res.status(404).json({ message: 'Serviço não encontrado' })
            }

            return res.status(200).json(servico)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Atualizar serviço
    async update(req: Request, res: Response) {
        const { id_servico } = req.params;
        const { descricao, valor } = req.body;

        try {
            if (!await servicoRepository.findOneBy({ id_servico: Number(id_servico) })) {
                return res.status(404).json({ message: 'Serviço não encontrado' })
            }

            await servicoRepository.update({ id_servico: Number(id_servico) }, { descricao, valor })

            return res.status(200).json({ message: 'Serviço atualizado com sucesso' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Deletar serviço
    async delete(req: Request, res: Response) {
        const { id_servico } = req.params;

        try {
            const servico = await servicoRepository.findOneBy({
                id_servico: Number(id_servico)
            })

            if (!servico) {
                return res.status(404).json({ message: 'Serviço não encontrado' })
            }

            await servicoRepository.delete({ id_servico: Number(id_servico) })

            return res.status(200).json({ message: 'Serviço deletado com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}