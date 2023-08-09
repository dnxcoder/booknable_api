import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

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

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { AvailableTimes };
