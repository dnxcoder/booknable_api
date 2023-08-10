import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { AvailableTimes } from "../../subjects/entities/AvaiableTimes";

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

  @OneToMany(() => AvailableTimes, (availableTimes) => availableTimes.user)
  availableTimes: AvailableTimes[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
