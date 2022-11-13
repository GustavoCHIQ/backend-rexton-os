import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668323732044 implements MigrationInterface {
    name = 'default1668323732044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" SET DEFAULT '2022-11-13'`);
    }

}
