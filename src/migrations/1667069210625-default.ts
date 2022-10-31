import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667069210625 implements MigrationInterface {
    name = 'default1667069210625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_cliente"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "REL_562fa164c9eb82a342aa2974e0"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "id_cliente"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "REL_157ac95e297825ff0a5779c916"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "id_funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "cliente" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "funcionario" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "id_servico" integer`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "dataNascimento"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "dataNascimento" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_fff3941c9790c389b6f1d0158d3" FOREIGN KEY ("cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_6cc4e33af8981c10f4005c8832c" FOREIGN KEY ("funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_8cf6ff7c34168420b1c4420049a" FOREIGN KEY ("id_servico") REFERENCES "servicos"("id_servico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_8cf6ff7c34168420b1c4420049a"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_6cc4e33af8981c10f4005c8832c"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_fff3941c9790c389b6f1d0158d3"`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "dataNascimento"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "dataNascimento" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "id_servico"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "cliente"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "id_funcionario" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "REL_157ac95e297825ff0a5779c916" UNIQUE ("id_funcionario")`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "id_cliente" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "REL_562fa164c9eb82a342aa2974e0" UNIQUE ("id_cliente")`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_funcionario" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_cliente" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
