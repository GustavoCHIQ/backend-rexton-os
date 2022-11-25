import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669335925971 implements MigrationInterface {
    name = 'default1669335925971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "finalizado" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "finalizado" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" SET DEFAULT '2022-11-13'`);
    }

}
