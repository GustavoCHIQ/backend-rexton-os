import { Request, Response } from 'express'
import { funcionarioRepository } from '../repositories/funcionarioRepository'

export class FuncionarioController {

    // Criar Funcionario
    async create(req: Request, res: Response) {
        const { nome, cpf, endereco, dataNascimento, dataAdmissao, dataDemissao, ativo } = req.body

        try {
            const novoFuncionario = await funcionarioRepository.save({ nome, cpf, endereco, dataNascimento, dataAdmissao, dataDemissao, ativo })

            return res.status(201).json({ message: 'Funcionário criado com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Listar todos os funcionarios
    async findAll(req: Request, res: Response) {
        try {
            const funcionario = await funcionarioRepository.find({
                select: ['id_funcionario', 'nome', 'cpf', 'endereco', 'dataNascimento', 'dataAdmissao', 'dataDemissao', 'ativo']
            })

            return res.status(200).json(funcionario)
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Listar funcionarios por id
    async findById(req: Request, res: Response) {
        const { id_funcionario } = req.params;

        try {
            const funcionario = await funcionarioRepository.find({
                select: ['id_funcionario', 'nome', 'cpf', 'endereco', 'dataNascimento', 'dataAdmissao', 'dataDemissao', 'ativo'],
                where: {
                    id_funcionario: Number(id_funcionario)
                }
            })

            if (funcionario.length === 0) {
                return res.status(404).json({ message: 'Funcionário não encontrado' })
            }

            return res.status(200).json(funcionario)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Atualizar funcionario
    async update(req: Request, res: Response) {
        const { id_funcionario } = req.params;
        const { nome, cpf, endereco, dataNascimento, dataAdmissao, dataDemissao, ativo } = req.body

        try {
            const funcionario = await funcionarioRepository.findOneBy({ id_funcionario: Number(id_funcionario) })

            if (!funcionario) {
                return res.status(404).json({ message: 'Funcionário não encontrado' })
            }
            await funcionarioRepository.update({ id_funcionario: Number(id_funcionario) }, { nome, cpf, endereco, dataNascimento, dataAdmissao, dataDemissao, ativo })

            return res.status(200).json({ message: 'Funcionário atualizado com sucesso' })
        }
        catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // Deletar funcionario
    async delete(req: Request, res: Response) {
        const { id_funcionario } = req.params;

        try {
            const funcionario = await funcionarioRepository.findOneBy({
                id_funcionario: Number(id_funcionario)
            })

            if (!funcionario) {
                return res.status(404).json({ message: 'Funcionário não encontrado' })
            }
            await funcionarioRepository.delete({ id_funcionario: Number(id_funcionario) })

            return res.status(200).json({ message: 'Funcionário deletado com sucesso' })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}