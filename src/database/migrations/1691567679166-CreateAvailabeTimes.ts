import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAvailabeTimes1691567679166 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "available_times",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "date",
            type: "timestamp",
          },
          {
            name: "time",
            type: "timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("available_times");
  }
}
