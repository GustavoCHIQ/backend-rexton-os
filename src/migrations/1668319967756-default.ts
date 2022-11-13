import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668319967756 implements MigrationInterface {
    name = 'default1668319967756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id_cliente" SERIAL NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "cidade" text NOT NULL, "estado" text NOT NULL, "telefone" text NOT NULL, "email" text NOT NULL, "dataNascimento" text NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "pk_id_cliente" PRIMARY KEY ("id_cliente"))`);
        await queryRunner.query(`CREATE TABLE "funcionarios" ("id_funcionario" SERIAL NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "dataNascimento" text NOT NULL, "dataAdmissao" text NOT NULL, "dataDemissao" text NOT NULL, CONSTRAINT "pk_id_funcionario" PRIMARY KEY ("id_funcionario"))`);
        await queryRunner.query(`CREATE TABLE "servicos" ("id_servico" SERIAL NOT NULL, "descricao" text NOT NULL, "valor" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "osIdOs" integer, CONSTRAINT "pk_id_servico" PRIMARY KEY ("id_servico"))`);
        await queryRunner.query(`CREATE TABLE "ordemdeservicos" ("id_os" SERIAL NOT NULL, "data_inicio" TIMESTAMP NOT NULL DEFAULT now(), "data_fim" TIME NOT NULL, "observacao" character varying NOT NULL, "finalizado" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cliente" integer, "funcionario" integer, "id_servico" integer, CONSTRAINT "pk_id_os" PRIMARY KEY ("id_os"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id_usuario" SERIAL NOT NULL, "nome" text NOT NULL, "rg" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "email" text NOT NULL, "telefone" text NOT NULL, "senha" text NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "pk_id_usuario" PRIMARY KEY ("id_usuario"))`);
        await queryRunner.query(`ALTER TABLE "servicos" ADD CONSTRAINT "FK_dbaa2f6d79baa207a1321796a80" FOREIGN KEY ("osIdOs") REFERENCES "ordemdeservicos"("id_os") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_fff3941c9790c389b6f1d0158d3" FOREIGN KEY ("cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_6cc4e33af8981c10f4005c8832c" FOREIGN KEY ("funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_8cf6ff7c34168420b1c4420049a" FOREIGN KEY ("id_servico") REFERENCES "servicos"("id_servico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_8cf6ff7c34168420b1c4420049a"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_6cc4e33af8981c10f4005c8832c"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_fff3941c9790c389b6f1d0158d3"`);
        await queryRunner.query(`ALTER TABLE "servicos" DROP CONSTRAINT "FK_dbaa2f6d79baa207a1321796a80"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "ordemdeservicos"`);
        await queryRunner.query(`DROP TABLE "servicos"`);
        await queryRunner.query(`DROP TABLE "funcionarios"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
