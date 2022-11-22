import express, { Request, Response } from "express";
import UserFacadeFactory from "../../../domain/users/factory/facade.factory";
export const userRouter = express.Router();
import passport from 'passport'

userRouter.post("/", async (req: Request, res: Response) => {

    const userFacade = UserFacadeFactory.create()

    try {
        const input = {
            username: req.body.username,
            password: req.body.password,
        };
        const output = await userFacade.createUser(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message
        });
    }
});


userRouter.get("/:id", passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {

    const userFacade = UserFacadeFactory.create()

    try {
        const input = {
            id: req.params.id
        };
        const output = await userFacade.findUser(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message
        });
    }
});


userRouter.get("/", passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {

    const userFacade = UserFacadeFactory.create()

    try {
        const input = {};
        const output = await userFacade.findAllUsers(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message
        });
    }
});

