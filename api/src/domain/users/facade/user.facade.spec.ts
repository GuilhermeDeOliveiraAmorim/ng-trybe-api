import { Sequelize } from "sequelize-typescript"
import AccountModel from "../../../infra/account/repository/account.model"
import UserModel from "../../../infra/user/repository/user.model"
import UserFacadeFactory from "../factory/facade.factory"


describe("Unit test for user facade", () => {

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

    it("should create an user", async () => {

        const userFacade = UserFacadeFactory.create()

        const input = {
            username: "john",
            password: "123456"
        }

        await userFacade.createUser(input)

        const user = await UserModel.findOne({ where: { id: "1" } })
    })
})