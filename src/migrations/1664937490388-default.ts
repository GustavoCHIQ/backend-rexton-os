import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664937490388 implements MigrationInterface {
    name = 'default1664937490388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "FK_157ac95e297825ff0a5779c9163"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "fk_id_funcionario" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP CONSTRAINT "fk_id_funcionario"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD CONSTRAINT "FK_157ac95e297825ff0a5779c9163" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id_funcionario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
