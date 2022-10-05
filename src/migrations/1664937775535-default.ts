import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664937775535 implements MigrationInterface {
    name = 'default1664937775535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_562fa164c9eb82a342aa2974e00"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_cliente" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_cliente"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_562fa164c9eb82a342aa2974e00" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
