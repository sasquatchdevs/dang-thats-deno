import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "https://denolib.com/denolib/typeorm@v0.2.23-rc10/mod.ts";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  firstName: string;

  @Column({ type: String })
  lastName: string;

  @Column({ type: Number })
  age: number;
}
