import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { AvailableTimes } from "./AvaiableTimes";
import { Appointments } from "../../../../appointments/infra/typeorm/entities/Appointments";

@Entity("subjects")
class Subjects {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => AvailableTimes, (availableTimes) => availableTimes.subject)
  teacherAvailableTimes: AvailableTimes[];

  @OneToMany(() => Appointments, (appointments) => appointments.subject)
  subjectAppointments: Appointments[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Subjects };
