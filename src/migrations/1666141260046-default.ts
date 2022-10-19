import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666141260046 implements MigrationInterface {
    name = 'default1666141260046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_157ac95e297825ff0a5779c9163"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_562fa164c9eb82a342aa2974e00"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "id_cliente"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "id_funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "cliente" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "funcionario" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_fff3941c9790c389b6f1d0158d3" FOREIGN KEY ("cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_6cc4e33af8981c10f4005c8832c" FOREIGN KEY ("funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_6cc4e33af8981c10f4005c8832c"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_fff3941c9790c389b6f1d0158d3"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "cliente"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "id_funcionario" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "id_cliente" integer`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_562fa164c9eb82a342aa2974e00" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_157ac95e297825ff0a5779c9163" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
