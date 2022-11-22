import UserRepositoryInterface from "../../../domain/users/repository/user.repository.interface";
import User from "../../../domain/users/entity/user.entity";
import UserModel from "./user.model";
import Account from "../../../domain/accounts/entity/account";




export default class UserRepository implements UserRepositoryInterface {

    async add(user: User): Promise<void> {
        await UserModel.create({
            id: user.id,
            username: user.username,
            password: user.password,
            accountId: user.account.id,
        });
    }

    async find(id: string): Promise<User> {
        const user = await UserModel.findOne({ where: { id: id }, include: [{ all: true }] });

        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }

        const userProps = {
            id: user.id,
            username: user.username,
            password: user.password,
            account: new Account({ id: user.account.id, balance: user.account.balance }),
        }

        return new User(userProps);
    }

    async findAll(): Promise<User[]> {
        const usersDb = await UserModel.findAll({ include: [{ all: true }] })

        const users = usersDb.map((user) => (
            new User({
                id: user.id,
                account: new Account({ id: user.account.id, balance: user.account.balance }),
                username: user.username,
                password: user.password
            })
        ))

        return users
    }

    async findByUsername(username: string): Promise<User> {

        const userDb = await UserModel.findOne({ where: { username: username }, include: [{ all: true }] });

        if (!userDb) {
            throw new Error(`User with username ${username} not found`);
        }

        const userProps = {
            id: userDb.id,
            username: userDb.username,
            password: userDb.password,
            account: new Account({ id: userDb.account.id, balance: userDb.account.balance })
        }

        return new User(userProps);
    }

    async verifyUsername(username: string): Promise<boolean> {

        const userDb = await UserModel.findOne({ where: { username: username } });

        if (userDb) {
            return true
        } else {
            return false
        }
    }
}
