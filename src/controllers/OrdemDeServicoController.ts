import { Request, Response } from 'express'
import { Between } from 'typeorm'
import { ordemDeServicoRepository } from '../repositories/ordemDeServicoRepository'

import { clienteRepository } from '../repositories/clienteRepository';
import { funcionarioRepository } from './../repositories/funcionarioRepository';
import { servicoRepository } from './../repositories/servicoRepository';

export class OrdemDeServicoController {
    // Criar Ordem De Servico
    async create(req: Request, res: Response) {
        const { cliente, funcionario, servico, observacao } = req.body

        if (!cliente || !funcionario || !servico || !observacao) {
            return res.status(400).json({ message: 'Dados inválidos' })
        }

        try {

            const cli = await clienteRepository.findOneBy({
                id_cliente: Number(cliente)
            })

            if (!cli) {
                return res.status(400).json({ message: 'Cliente não encontrado' })
            }

            const func = await funcionarioRepository.findOneBy({
                id_funcionario: Number(funcionario)
            })

            if (!func) {
                return res.status(400).json({ message: 'Funcionario não encontrado' })
            }

            const serv = await servicoRepository.findOneBy({
                id_servico: Number(servico)
            })

            if (!serv) {
                return res.status(400).json({ message: 'Serviço não encontrado' })
            }

            const ordemDeServico = await ordemDeServicoRepository.create({
                cliente, funcionario, servico, observacao
            })

            await ordemDeServicoRepository.save(ordemDeServico)

            return res.status(201).json(ordemDeServico)
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

    // Buscar todos registros de Ordem De Servico por data
    async findByData(req: Request, res: Response) {
        const { data } = req.params

        const dataAtual = new Date().toISOString().slice(0, 10)

        if (!data) {
            return res.status(400).json({ message: 'Data inválida' })
        }

        try {
            const ordemDeServico = await ordemDeServicoRepository.find({
                relations: ['cliente', 'funcionario', 'servico'],
                where: {
                    data_inicio: Between(data, dataAtual)
                }
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

        if (!id_os) {
            return res.status(400).json({ message: 'Informe o id da Ordem De Servico' })
        }

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
        const { cliente, funcionario, servico, observacao } = req.body

        if (!cliente || !funcionario || !servico || !observacao) {
            return res.status(400).json({ message: 'Dados inválidos' })
        }

        if (!id_os) {
            return res.status(400).json({ message: 'Informe o id da Ordem De Servico' })
        }

        try {
            const ordemDeServico = await ordemDeServicoRepository.findOneBy({
                id_os: Number(id_os)
            })

            if (!ordemDeServico) {
                return res.status(404).json({ message: 'Ordem De Servico não encontrada' })
            }

            await ordemDeServicoRepository.update({ id_os: Number(id_os) }, { cliente, funcionario, servico, observacao })

            return res.status(200).json({ message: 'Ordem De Servico atualizada com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Deletar Ordem De Servico
    async delete(req: Request, res: Response) {
        const { id_os } = req.params

        if (!id_os) {
            return res.status(400).json({ message: 'Informe o id da Ordem De Servico' })
        }

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

    // change status Ordem De Servico

    async changeStatus(req: Request, res: Response) {
        const { id_os } = req.params
        const { finalizado } = req.body

        if (!finalizado) {
            return res.status(400).json({ message: 'Informe o status da Ordem De Servico' })
        }

        if (!id_os) {
            return res.status(400).json({ message: 'Informe o id da Ordem De Servico' })
        }

        try {
            const ordemDeServico = await ordemDeServicoRepository.findOneBy({
                id_os: Number(id_os)
            })

            if (!ordemDeServico) {
                return res.status(404).json({ message: 'Ordem De Servico não encontrada' })
            }

            await ordemDeServicoRepository.update({ id_os: Number(id_os) }, { finalizado: finalizado })

            return res.status(200).json({ message: 'Ordem De Servico atualizada com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}