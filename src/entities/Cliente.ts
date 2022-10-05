import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number

  @Column({ type: 'text' })
  nome: string

  @Column({ type: 'text' })
  cpf: string

  @Column({ type: 'text' })
  endereco: string

  @Column({ type: 'text' })
  cidade: string

  @Column({ type: 'text' })
  estado: string

  @Column({ type: 'text' })
  telefone: string

  @Column({ type: 'text' })
  email: string

  @Column({ type: 'date' })
  dataNascimento = Date

  @Column({ type: 'boolean', default: true })
  ativo: boolean

  @CreateDateColumn()
  createdAt = Date

  @UpdateDateColumn()
  updatedAt = Date
}
