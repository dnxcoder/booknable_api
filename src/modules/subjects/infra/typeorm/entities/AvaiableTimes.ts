import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { Subjects } from "./Subjects";
import { User } from "../../../../user/infra/typeorm/entities/User";

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

  @ManyToOne(() => User, (user) => user.teacherAvailableTimes)
  @JoinColumn({ name: "teacher_id" })
  teacher: User;

  @ManyToOne(() => Subjects, (subject) => subject.teacherAvailableTimes)
  @JoinColumn({ name: "subject_id" })
  subject: Subjects;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { AvailableTimes };
