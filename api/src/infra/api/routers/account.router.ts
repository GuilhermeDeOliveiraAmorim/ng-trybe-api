import express, { Request, Response } from "express";
import AccountFacadeFactory from "../../../domain/accounts/factory/facade.factory";
import passport from 'passport'


export const accountRouter = express.Router();

accountRouter.get("/:id", passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {

    const accFacade = AccountFacadeFactory.create()

    try {
        const input = {
            id: req.params.id
        };
        const output = await accFacade.findAccount(input);
        res.send(output);
    } catch (err: any) {
        res.status(500).send({
            message: err.message
        });
    }
});
