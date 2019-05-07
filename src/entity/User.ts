import {Column, Entity, JoinTable, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {UserRoles} from "./UserRoles";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({ length: 50, unique: true})
    username: string;

    @Column({ length: 50, unique: true})
    email: string;

    @Column()
    password: string;

    @ManyToOne(type => UserRoles, userRoles => userRoles.users)
    @JoinTable()
    userRol: UserRoles;

}