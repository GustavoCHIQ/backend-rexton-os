import { AppDataSource } from '../data-source'
import { Servico } from '../entities/Servico'

export const servicoRepository = AppDataSource.getRepository(Servico)
