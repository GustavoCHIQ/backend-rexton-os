import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668320144766 implements MigrationInterface {
    name = 'default1668320144766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "dataNascimento"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "dataNascimento" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "funcionarios" DROP COLUMN "dataNascimento"`);
        await queryRunner.query(`ALTER TABLE "funcionarios" ADD "dataNascimento" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "data_inicio"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "data_inicio" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" DROP COLUMN "data_inicio"`);
        await queryRunner.query(`ALTER TABLE "ordemdeservicos" ADD "data_inicio" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "funcionarios" DROP COLUMN "dataNascimento"`);
        await queryRunner.query(`ALTER TABLE "funcionarios" ADD "dataNascimento" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "dataNascimento"`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "dataNascimento" text NOT NULL`);
    }

}
