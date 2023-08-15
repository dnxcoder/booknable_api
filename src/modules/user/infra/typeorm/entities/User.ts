import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { AvailableTimes } from "../../../../subjects/infra/typeorm/entities/AvaiableTimes";
import { Appointments } from "../../../../appointments/infra/typeorm/entities/Appointments";
import { Person } from "./Person";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column({nullable:false})
  email: string;
  
  @Column({nullable:false})
  password: string;

  @Column({nullable:false})
  is_student: boolean;

  @Column({nullable:false})
  is_admin: boolean;

  @Column({nullable:false})
  is_teacher: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Person, (person) => person.user)
  person: Person;

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
