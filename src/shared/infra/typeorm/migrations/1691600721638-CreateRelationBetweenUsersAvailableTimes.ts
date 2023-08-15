import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateRelationBetweenUsersAvailableTimes1691600721638
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "available_times",
      new TableColumn({
        name: "teacher_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "available_times",
      new TableForeignKey({
        name: "FK_Teacher_AvailableTime",
        columnNames: ["teacher_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverter a criação da chave estrangeira primeiro
    await queryRunner.dropForeignKey(
      "available_times",
      "FK_Teacher_AvailableTime"
    ); // Substitua "FK_..." pelo nome correto da chave estrangeira

    // Em seguida, reverter a adição da coluna
    await queryRunner.dropColumn("available_times", "user_id");
  }
}
