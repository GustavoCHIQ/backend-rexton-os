import { AppDataSource } from '../data-source'
import { Cliente } from '../entities/Cliente'

export const clienteRepository = AppDataSource.getRepository(Cliente)
