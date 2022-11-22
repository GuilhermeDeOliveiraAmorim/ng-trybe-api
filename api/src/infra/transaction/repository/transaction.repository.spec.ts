import { Op } from "sequelize"
import { Sequelize } from "sequelize-typescript"
import Account from "../../../domain/accounts/entity/account"
import Transaction from "../../../domain/transactions/entity/transactions"
import AccountModel from "../../account/repository/account.model"
import AccountRepository from "../../account/repository/account.repository"
import TransactionModel from "./transaction.model"
import TransactionRepository from "./transaction.repository"


describe("Unit test for transaction repository", () => {
    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        })

        sequelize.addModels([AccountModel, TransactionModel])
        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })


    it("should create a transaction", async () => {

        const accountRepository = new AccountRepository()

        const transactionRepository = new TransactionRepository()

        const accCred = new Account({ id: "1" })

        const accDeb = new Account({ id: "2" })

        await accountRepository.add(accCred)

        await accountRepository.add(accDeb)

        const transaction = new Transaction({
            id: "123",
            debitAccount: accCred,
            creditAccount: accDeb,
            value: 20,
            createdAt: new Date()
        })


        await transactionRepository.save(transaction)

        const output = await TransactionModel.findOne({ where: { id: "123" } })

        expect(output.id).toBe("123")
        expect(output.debitedAccountId).toBe("1")
        expect(output.creditedAccountId).toBe("2")
    })

    it("should list all transactions", async () => {

        const accountRepository = new AccountRepository()

        const transactionRepository = new TransactionRepository()

        const accCred = new Account({ id: "1" })

        const accDeb = new Account({ id: "2" })

        await accountRepository.add(accCred)

        await accountRepository.add(accDeb)


        const transaction = new Transaction({
            debitAccount: accCred,
            creditAccount: accDeb,
            value: 20,
            createdAt: new Date()
        })

        await transactionRepository.save(transaction)

        const output = await TransactionModel.findAll({ include: [{ all: true }] })

        expect(output.length).toBe(1)

    })


    it("should list all transactions from account", async () => {

        const accountRepository = new AccountRepository()

        const transactionRepository = new TransactionRepository()

        const accCred = new Account({ id: "1" })

        const accDeb = new Account({ id: "2" })

        await accountRepository.add(accCred)

        await accountRepository.add(accDeb)

        const transaction = new Transaction({
            debitAccount: accCred,
            creditAccount: accDeb,
            value: 20,
            createdAt: new Date()
        })

        await transactionRepository.save(transaction)

        const transaction2 = new Transaction({
            debitAccount: accCred,
            creditAccount: accDeb,
            value: 20,
            createdAt: new Date()
        })

        await transactionRepository.save(transaction2)

        const output = await transactionRepository.findAllFromAccount(accCred.id)

        expect(output.length).toBe(2)

    })
})