import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666141098623 implements MigrationInterface {
    name = 'default1666141098623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_cliente"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "id_cliente" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "REL_562fa164c9eb82a342aa2974e0"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "id_funcionario" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "REL_157ac95e297825ff0a5779c916"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "id_servico"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "id_servico" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_562fa164c9eb82a342aa2974e00" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_157ac95e297825ff0a5779c9163" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_8cf6ff7c34168420b1c4420049a" FOREIGN KEY ("id_servico") REFERENCES "servicos"("id_servico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_8cf6ff7c34168420b1c4420049a"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_157ac95e297825ff0a5779c9163"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_562fa164c9eb82a342aa2974e00"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "id_servico"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "id_servico" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "REL_157ac95e297825ff0a5779c916" UNIQUE ("id_funcionario")`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "id_funcionario" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "REL_562fa164c9eb82a342aa2974e0" UNIQUE ("id_cliente")`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "id_cliente" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_funcionario" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_cliente" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
