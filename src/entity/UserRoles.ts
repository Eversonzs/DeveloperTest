import {Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable} from "typeorm";
import { User } from "./User";

@Entity()
export class UserRoles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => User, user => user.userRoles)
    @JoinTable()
    user: User[];
    
}