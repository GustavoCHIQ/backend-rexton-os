import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666049590620 implements MigrationInterface {
    name = 'default1666049590620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id_cliente" SERIAL NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "cidade" text NOT NULL, "estado" text NOT NULL, "telefone" text NOT NULL, "email" text NOT NULL, "dataNascimento" text NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "pk_id_cliente" PRIMARY KEY ("id_cliente"))`);
        await queryRunner.query(`CREATE TABLE "funcionarios" ("id_funcionario" SERIAL NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "dataNascimento" text NOT NULL, "dataAdmissao" text NOT NULL, "dataDemissao" text NOT NULL, CONSTRAINT "id_funcionario" PRIMARY KEY ("id_funcionario"))`);
        await queryRunner.query(`CREATE TABLE "ordemdeservicos" ("id_os" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id_cliente" integer, "id_funcionario" integer, CONSTRAINT "REL_562fa164c9eb82a342aa2974e0" UNIQUE ("id_cliente"), CONSTRAINT "REL_157ac95e297825ff0a5779c916" UNIQUE ("id_funcionario"), CONSTRAINT "pk_id_os" PRIMARY KEY ("id_os"))`);
        await queryRunner.query(`CREATE TABLE "servicos" ("id_servico" SERIAL NOT NULL, "descricao" text NOT NULL, "valor" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "osIdOs" integer, CONSTRAINT "pk_id_servico" PRIMARY KEY ("id_servico"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id_usuario" SERIAL NOT NULL, "nome" text NOT NULL, "rg" text NOT NULL, "cpf" text NOT NULL, "endereco" text NOT NULL, "email" text NOT NULL, "telefone" text NOT NULL, "senha" text NOT NULL, "ativo" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "pk_id_usuario" PRIMARY KEY ("id_usuario"))`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_cliente" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_funcionario" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "servicos" ADD CONSTRAINT "FK_dbaa2f6d79baa207a1321796a80" FOREIGN KEY ("osIdOs") REFERENCES "ordemdeservicos"("id_os") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "servicos" DROP CONSTRAINT "FK_dbaa2f6d79baa207a1321796a80"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_cliente"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "servicos"`);
        await queryRunner.query(`DROP TABLE "ordemdeservicos"`);
        await queryRunner.query(`DROP TABLE "funcionarios"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
