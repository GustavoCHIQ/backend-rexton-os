import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668322851159 implements MigrationInterface {
    name = 'default1668322851159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" DROP NOT NULL`);
    }

}
