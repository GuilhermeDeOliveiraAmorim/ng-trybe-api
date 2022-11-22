import { Sequelize } from "sequelize-typescript"
import AccountModel from "../../../infra/account/repository/account.model"
import AccountFacadeFactory from "../factory/facade.factory"

describe("Unit test for account facade", () => {

    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        })

        sequelize.addModels([AccountModel])
        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it("should create an account", async () => {

        const accountFacade = AccountFacadeFactory.create()

        const input = {}

        const output = await accountFacade.createAccount(input)

        expect(output.balance).toBe(100)
        expect(output.id).toEqual(expect.any(String))
    })
})