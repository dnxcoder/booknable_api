import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1691565009572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "users",
            columns: [
              {
                name: "id",
                type: "uuid",
              },
              {
                name: "email",
                type: "varchar",
              },
              {
                name: "password",
                type: "varchar",
              },
              {
                name: "is_aluno",
                type: "boolean",
              },
              {
                name: "is_admin",
                type: "boolean",
              },
              {
                name: "is_professor",
                type: "boolean",
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
        await queryRunner.dropTable("users");
      }

}
