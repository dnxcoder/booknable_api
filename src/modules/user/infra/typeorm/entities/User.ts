import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { AvailableTimes } from "../../../../subjects/infra/typeorm/entities/AvaiableTimes";
import { Appointments } from "../../../../appointments/infra/typeorm/entities/Appointments";

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

  @OneToMany(() => AvailableTimes, (availableTimes) => availableTimes.teacher)
  teacherAvailableTimes: AvailableTimes[];

  @OneToMany(() => Appointments, (appointments) => appointments.student)
  studentAppointments: Appointments[];

  @OneToMany(() => Appointments, (appointments) => appointments.teacher)
  teacherAppointments: Appointments[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
