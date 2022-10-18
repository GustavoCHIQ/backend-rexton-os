import { Request, Response } from "express";
import { servicoRepository } from "../repositories/servicoRepository";

export class ServicoController {
    async create(req: Request, res: Response) {
        var { descricao, valor } = req.body

        try {
            const novoServico = servicoRepository.create({ descricao, valor })
            await servicoRepository.save(novoServico)
            return res.status(201).json(novoServico)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const servico = await servicoRepository.find({
                select: ['id_servico', 'descricao', 'valor']
            })

            return res.status(200).json(servico)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async findById(req: Request, res: Response) {
        const { id_servico } = req.params;

        try {
            const servico = await servicoRepository.find({
                select: ['id_servico', 'descricao', 'valor'],
                where: {
                    id_servico: Number(id_servico)
                }
            })

            if (servico.length === 0) {
                return res.status(404).json({ message: 'Serviço não encontrado' })
            }

            return res.status(200).json(servico)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async update(req: Request, res: Response) {
        const { id_servico } = req.params;
        const { descricao, valor } = req.body;

        try {
            const servico = await servicoRepository.findOneBy({ id_servico: Number(id_servico) })

            if (!servico) {
                return res.status(404).json({ message: 'Serviço não encontrado' })
            }

            servicoRepository.merge(servico, { descricao, valor })
            const resultado = await servicoRepository.save(servico)

            return res.status(200).json({ message: 'Serviço atualizado com sucesso' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async delete(req: Request, res: Response) {
        const { id_servico } = req.params;

        const servico = await servicoRepository.findOneBy({ id_servico: Number(id_servico) })

        if (!servico) {
            return res.status(404).json({ message: 'Serviço não encontrado' })
        }

        try {
            await servicoRepository.delete({ id_servico: Number(id_servico) })
            return res.status(200).json({ message: 'Serviço deletado com sucesso' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}