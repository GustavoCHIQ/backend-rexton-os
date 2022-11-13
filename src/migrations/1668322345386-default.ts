import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668322345386 implements MigrationInterface {
    name = 'default1668322345386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_fim" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "finalizado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "createdAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "updatedAt" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "updatedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "createdAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "finalizado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_fim" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ALTER COLUMN "data_inicio" SET NOT NULL`);
    }

}
