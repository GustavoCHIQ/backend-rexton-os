import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668320011171 implements MigrationInterface {
    name = 'default1668320011171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "data_fim"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "data_fim" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "data_fim"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "data_fim" TIME NOT NULL`);
    }

}
