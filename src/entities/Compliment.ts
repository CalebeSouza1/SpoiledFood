import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"; 
import { Request } from "./Request"

@Entity("compliments")
class Compliment {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    message: string; 

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

export{Compliment}