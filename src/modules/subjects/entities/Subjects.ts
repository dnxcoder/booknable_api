import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { AvailableTimes } from "./AvaiableTimes";

@Entity("subjects")
class Subjects {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => AvailableTimes, (availableTimes) => availableTimes.subject)
  availableTimes: AvailableTimes[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Subjects };
