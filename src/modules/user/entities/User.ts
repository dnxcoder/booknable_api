import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  is_aluno: boolean;

  @Column()
  is_admin: boolean;

  @Column()
  is_professor: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
