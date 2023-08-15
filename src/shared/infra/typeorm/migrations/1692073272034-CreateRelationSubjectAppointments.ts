import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateRelationSubjectAppointments1692073272034
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "appointments",
      new TableColumn({
        name: "subject_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "appointments",
      new TableForeignKey({
        name: "FK_Subject_Appointments",
        columnNames: ["subject_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "subjects",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("appointments", "FK_Subject_Appointments");

    await queryRunner.dropColumn("appointments", "subject_id");
  }
}
