import express, { Request, Response } from "express";
import UserFacadeFactory from "../../../domain/users/factory/facade.factory";
import passport from 'passport'

export const authenticationRouter = express.Router();

authenticationRouter.post("/", async (req: Request, res: Response) => {

    const userFacade = UserFacadeFactory.create()

    try {
        const input = {
            username: req.body.username,
            password: req.body.password,
        };
        const output = await userFacade.authenticateUser(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message
        });
    }
});
