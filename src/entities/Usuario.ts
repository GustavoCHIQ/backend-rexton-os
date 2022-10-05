import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  rg: string;

  @Column({ type: "text" })
  cpf: string;

  @Column({ type: "text" })
  endereco: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  telefone: string;

  @Column({ type: "text" })
  senha: string;

  @Column({ type: "boolean", default: true })
  ativo: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
