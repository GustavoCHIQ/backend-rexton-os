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
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_id_os' })
  id_os: number

  @OneToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente', foreignKeyConstraintName: 'fk_id_cliente' })
  cliente: Cliente

  @OneToOne(() => Funcionario)
  @JoinColumn({ name: 'id_funcionario', foreignKeyConstraintName: 'fk_id_funcionario' })
  funcionario: Funcionario

  @OneToMany(() => Servico, servico => servico.os)
  servicos: Servico[]

  @Column({ type: 'text' })
  id_cliente: string

  @Column({ type: 'text' })
  id_funcionario: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
