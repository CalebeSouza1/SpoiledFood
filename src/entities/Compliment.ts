import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"; 
import { Request } from "./Request"

@Entity("compliments")
class Compliment {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    requests_id: string;

    @JoinColumn({name: "requests_id"})
    @ManyToOne(() => Request)
    requests: Request;


    @Column()
    message: string; 

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}

export{Compliment}