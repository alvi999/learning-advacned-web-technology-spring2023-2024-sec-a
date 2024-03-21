import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import * as bcrypt from 'bcrypt';
  
  @Entity('logins')
  export class Login {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true, nullable: false })
    email: string;
  
    @Column({ nullable: false })
    password: string;
  
    @BeforeInsert()
    async HashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
  