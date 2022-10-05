import { AppDataSource } from '../data-source'
import { OrdemDeServico } from '../entities/OrdemDeServico'

export const ordemDeServicoRepository = AppDataSource.getRepository(OrdemDeServico)
