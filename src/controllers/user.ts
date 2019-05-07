import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";
import { UserRoles } from "../entity/UserRoles";

export async function post(request: Request, response: Response) {
    try{
        const userRepository = getManager().getRepository(User);
        const userRolesRepository = getManager().getRepository(UserRoles);
        const userRol = await userRolesRepository.findByIds(request.body.userRol)
        request.body.userRoles = userRol;

        const newUser = userRepository.create(request.body);

        await userRepository.save(newUser);

        response.send(newUser);
    }catch(error){
        console.log("Error:", error);
        response.status(500);
        response.json({
            code: error.code,
            message: error.message
        })
        response.end();
        return;
    }
}

export async function getAll(request: Request, response: Response) {
    try{
        const userRepository = getManager().getRepository(User);
        const users = await userRepository.find({ relations: ["userRol"] });

        response.send(users);
    }catch(error){ 
        console.log("Error:", error);
        response.status(500);
        response.json({
            code: error.code,
            message: error.message
        })
        response.end();
        return;
    }
}

export async function getOne(request: Request, response: Response) {
    try{
        const userRepository = getManager().getRepository(User);
        const user = await userRepository.findOne(request.params.id, { relations: ["userRol"] });

        if (!user) {
            response.status(404);
            response.end();
            return;
        }
        response.send(user);
    }catch(error){
        console.log("Error:", error);
        response.status(500);
        response.json({
            code: error.code,
            message: error.message
        })
        response.end();
        return;
    }
}

export async function put(request: Request, response: Response) {
    try{
        const userRepository = getManager().getRepository(User);
        const userRolesRepository = getManager().getRepository(UserRoles);

        const user = await userRepository.findOne(request.params.id);
        const userRol = await userRolesRepository.findByIds(request.body.userRol)
        request.body.userRoles = userRol;

        if (!user) {
            response.status(404);
            response.end();
            return;
        }

        user.name = request.body.name || user.name;
        user.surname = request.body.surname || user.surname;
        user.username = request.body.username || user.username;
        user.email = request.body.email || user.email;
        user.password = request.body.password || user.password;
        user.userRol = request.body.userRol || user.userRol;

        await userRepository.save(user);
        response.send(user);
    }catch(error){
        console.log("Error:", error);
        response.status(500);
        response.json({
            code: error.code,
            message: error.message
        })
        response.end();
        return;
    }
}

export async function remove(request: Request, response: Response) {
    try{
        const userRepository = getManager().getRepository(User);
        const user = await userRepository.findOne(request.params.id);

        if (!user) {
            response.status(404);
            response.end();
            return;
        }

        await userRepository.remove(user);
        response.send(user);
    }catch(error){
        console.log("Error:", error);
        response.status(500);
        response.json({
            code: error.code,
            message: error.message
        })
        response.end();
        return;
    }
}