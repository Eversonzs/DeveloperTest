import {Column, PrimaryGeneratedColumn, Entity, JoinTable, OneToMany} from "typeorm";
import { User } from "./User";

@Entity()
export class UserRoles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => User, user => user.userRol)
    @JoinTable()
    users: User[];
    
}