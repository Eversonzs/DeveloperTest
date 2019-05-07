import {Request, Response} from "express";
import {getManager} from "typeorm";
import {UserRoles} from "../entity/UserRoles";

export async function post(request: Request, response: Response) {
    try{
        const userRolesRepository = getManager().getRepository(UserRoles);

        const newUserRol = userRolesRepository.create(request.body);

        await userRolesRepository.save(newUserRol);

        response.send(newUserRol);
    }catch(error){ 
        console.log("Error:", error);
    }
}

export async function getAll(request: Request, response: Response) {
    try{
        const userRolesRepository = getManager().getRepository(UserRoles);
        const userRoles = await userRolesRepository.find( { relations: ["users"] });

        response.send(userRoles);
    }catch(error){
        console.log("Error:", error);
    }
}

export async function getOne(request: Request, response: Response) {
    try{
        const userRolesRepository = getManager().getRepository(UserRoles);
        const userRol = await userRolesRepository.findOne(request.params.id, { relations: ["users"] });

        if (!userRol) {
            response.status(404);
            response.end();
            return;
        }
        response.send(userRol);
    }catch(error){ 
        console.log("Error:", error);
    }
}

export async function put(request: Request, response: Response) {
    try{
        const userRolesRepository = getManager().getRepository(UserRoles);
        const userRol = await userRolesRepository.findOne(request.params.id);

        if (!userRol) {
            response.status(404);
            response.end();
            return;
        }

        userRol.name = request.body.name || userRol.name;

        await userRolesRepository.save(userRol);
        response.send(userRol);
    }catch(error){ 
        console.log("Error:", error);
    }
}

export async function remove(request: Request, response: Response) {
    try{
        const userRolesRepository = getManager().getRepository(UserRoles);
        const userRol = await userRolesRepository.findOne(request.params.id);

        if (!userRol) {
            response.status(404);
            response.end();
            return;
        }

        await userRolesRepository.remove(userRol);
        response.send(userRol);
    }catch(error){ 
        console.log("Error:", error);
    }
}