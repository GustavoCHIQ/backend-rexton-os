import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Cliente } from './Cliente'
import { Funcionario } from './Funcionario'
import { Servico } from './Servico'


@Entity('ordemdeservicos')
export class OrdemDeServico {
  @PrimaryGeneratedColumn()
  id_os: number

  @OneToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente

  @OneToOne(() => Funcionario)
  @JoinColumn({ name: 'id_funcionario' })
  funcionario: Funcionario

  @OneToMany(() => Servico, servico => servico.os)
  servicos: Servico[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
