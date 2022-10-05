import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { OrdemDeServico } from './OrdemDeServico'

@Entity('servicos')
export class Servico {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_id_servico' })
  id_servico: number

  @Column({ type: 'text' })
  descricao: string

  @Column({ type: 'float' })
  valor: number

  @ManyToOne(() => OrdemDeServico, os => os.servicos)
  os: OrdemDeServico

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

}
