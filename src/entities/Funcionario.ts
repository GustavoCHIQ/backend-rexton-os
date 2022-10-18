import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('funcionarios')
export class Funcionario {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_id_funcionario' })
  id_funcionario: number

  @Column({ type: 'text' })
  nome: string

  @Column({ type: 'text' })
  cpf: string

  @Column({ type: 'text' })
  endereco: string

  @Column({ type: 'boolean', default: true })
  ativo: string

  @Column({ type: 'text' })
  dataNascimento: string

  @Column({ type: 'text' })
  dataAdmissao: string

  @Column({ type: 'text' })
  dataDemissao: string
}
