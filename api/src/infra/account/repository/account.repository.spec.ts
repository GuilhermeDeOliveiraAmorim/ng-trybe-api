import { Sequelize } from "sequelize-typescript";
import Account from "../../../domain/accounts/entity/account";
import TransactionModel from "../../transaction/repository/transaction.model";
import AccountModel from "./account.model";
import AccountRepository from "./account.repository";


describe("Unit test for account repository", () => {
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
        const accountRepository = new AccountRepository()

        const account = new Account({ id: "1" })

        await accountRepository.add(account)

        const accountDb = await AccountModel.findOne({ where: { id: account.id } })

        expect(account.id).toEqual(accountDb.id)
        expect(account.balance).toEqual(accountDb.balance)

    })

    it("should find an account", async () => {

        const accountRepository = new AccountRepository()

        await AccountModel.create({
            id: "1",
            balance: 100,
        })

        const account = await accountRepository.find("1")

        expect(account.id).toEqual("1")
        expect(account.balance).toEqual(100)
    })


    it("should update an account", async () => {
        const accountRepository = new AccountRepository()

        const account = new Account({ id: "1" })

        await accountRepository.add(account)

        account.addCredit(200)

        await accountRepository.update(account)

        account.addCredit(200)

        await accountRepository.update(account)

        const output = await AccountModel.findOne({ where: { id: "1" } })

        expect(output.balance).toEqual(500)
    })

    it("should list all transactions", async () => {
        const accountRepository = new AccountRepository()

        await AccountModel.create({
            id: "1", balance: 100,
        })

        await AccountModel.create({
            id: "2", balance: 200,
        })

        await AccountModel.create({
            id: "3", balance: 300,
        })

        const output = await AccountModel.findAll()

        expect(output.length).toBe(3)
        expect(output[1].balance).toBe(200)
    })
})