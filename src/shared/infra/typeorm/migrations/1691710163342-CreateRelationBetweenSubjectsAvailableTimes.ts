import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateRelationBetweenSubjectsAvailableTimes1691710163342
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "available_times",
      new TableColumn({
        name: "subject_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "available_times",
      new TableForeignKey({
        name: "FK_Subject_AvailableTimes",
        columnNames: ["subject_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "subjects",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverter a criação da chave estrangeira primeiro
    await queryRunner.dropForeignKey("available_times", "FK_Subject_AvailableTimes"); // Substitua "FK_..." pelo nome correto da chave estrangeira

    // Em seguida, reverter a adição da coluna
    await queryRunner.dropColumn("available_times", "subject_id");
  }
}
