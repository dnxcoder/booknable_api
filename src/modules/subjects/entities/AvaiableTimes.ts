import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "../../user/entities/User";
import { Subjects } from "./Subjects";

@Entity("available_times")
class AvailableTimes {
  @PrimaryColumn()
  id: string;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.availableTimes)
  user: User;

  @ManyToOne(() => Subjects, (subject) => subject.availableTimes)
  subject: Subjects;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { AvailableTimes };
