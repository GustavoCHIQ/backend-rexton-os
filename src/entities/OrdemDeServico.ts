import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Cliente } from './Cliente'
import { Funcionario } from './Funcionario'
import { Servico } from './Servico'


@Entity('ordemdeservicos')
export class OrdemDeServico {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_id_os' })
  id_os: number

  @ManyToOne(() => Cliente, cliente => cliente.id_cliente)
  @JoinColumn({ name: 'cliente' })
  cliente: Cliente

  @ManyToOne(() => Funcionario, funcionario => funcionario.id_funcionario)
  @JoinColumn({ name: 'funcionario' })
  funcionario: Funcionario

  @ManyToOne(() => Servico, servico => servico.id_servico)
  @JoinColumn({ name: 'id_servico' })
  servico: Servico

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
