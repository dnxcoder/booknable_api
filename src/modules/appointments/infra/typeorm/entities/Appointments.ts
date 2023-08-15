import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "../../../../user/infra/typeorm/entities/User";
import { Subjects } from "../../../../subjects/infra/typeorm/entities/Subjects";

@Entity("appointments")
class Appointments {
  @PrimaryColumn()
  id: string;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.studentAppointments)
  @JoinColumn({ name: "student_id" })
  student: User;

  @ManyToOne(() => User, (user) => user.teacherAppointments)
  @JoinColumn({ name: "teacher_id" })
  teacher: User;

  @ManyToOne(() => Subjects, (subject) => subject.subjectAppointments)
  @JoinColumn({ name: "subject_id" })
  subject: Subjects;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Appointments };
