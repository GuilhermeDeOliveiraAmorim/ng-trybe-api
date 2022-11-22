import { Sequelize } from "sequelize-typescript";
import Account from "../../../domain/accounts/entity/account";
import User from "../../../domain/users/entity/user.entity";
import AccountModel from "../../account/repository/account.model";
import UserModel from "./user.model";
import UserRepository from "./user.repository";



describe("Unit test for user repository", () => {
    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        })

        sequelize.addModels([UserModel, AccountModel])
        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it("should create a user", async () => {
        const userRepository = new UserRepository()

        const account = new Account({ id: "1" })

        await AccountModel.create({ id: account.id, balance: account.balance })

        const user = new User({ id: "1", username: "user 1", password: "senha", account: account })

        await userRepository.add(user)

        const userDb = await UserModel.findOne({ where: { id: user.id } })

        expect(user.id).toEqual(userDb.id)
        expect(user.username).toEqual(user.username)


    })

    it("should find an user with id", async () => {

        const account = new Account({ id: "1" })

        await AccountModel.create({ id: account.id, balance: account.balance })

        const userRepository = new UserRepository()

        UserModel.create({
            id: "1",
            username: "helderprado",
            password: "senha",
            accountId: "1",

        })

        const user = await userRepository.find("1")

        expect(user.id).toEqual("1")
        expect(user.username).toEqual("helderprado")
    })

    it("should find an user with username", async () => {

        const account = new Account({ id: "1" })

        await AccountModel.create({ id: account.id, balance: account.balance })

        const userRepository = new UserRepository()

        const input = {
            id: "1",
            username: "helderprado",
            password: "senha",
            accountId: "1",

        }

        await UserModel.create(input)

        const output = await userRepository.findByUsername("helderprado")

        expect(output.id).toEqual("1")
        expect(output.username).toEqual("helderprado")
    })
})