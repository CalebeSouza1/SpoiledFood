import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Compliment } from "./Compliment";
import { Dish } from "./Dish";
import { User } from "./User";

@Entity("requests")
class Request {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  dish_id: string;

  @Column()
  user_id: string;

  @Column()
  compliment_id: string

  @JoinColumn({ name: "compliment_id" })
  @OneToMany(() => Compliment, compliment =>compliment.id)
  compliment: Compliment;

  @JoinColumn({ name: "user_id" })
  @OneToMany(() => User, user =>user.id)
  user: User;

  @JoinColumn({ name: "dish_id" })
  @ManyToOne(() => Dish)
  dish: Dish;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Request };
