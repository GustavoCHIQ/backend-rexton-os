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
  IsNull,
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

  @Column({ name: "data_inicio", type: "date", default: "now()" })
  data_inicio: string

  @Column({ name: "data_fim", type: "date", nullable: true })
  data_fim: string

  @Column({ type: 'varchar', name: 'observacao' })
  observacao: string

  @Column({ nullable: true, default: false })
  finalizado: boolean

  @CreateDateColumn({ nullable: true })
  createdAt: Date

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date
}
