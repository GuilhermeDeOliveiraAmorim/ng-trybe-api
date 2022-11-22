import { Op } from "sequelize";
import Account from "../../../domain/accounts/entity/account";
import Transaction from "../../../domain/transactions/entity/transactions";
import TransactionRepositoryInterface from "../../../domain/transactions/repository/transaction.repository.interface";
import AccountModel from "../../account/repository/account.model";
import TransactionModel from "./transaction.model";



export default class TransactionRepository implements TransactionRepositoryInterface {
    async save(input: Transaction): Promise<void> {
        await TransactionModel.create({
            id: input.id,
            debitedAccountId: input.debitAccount.id,
            creditedAccountId: input.creditAccount.id,
            value: input.value,
            createdAt: input.createdAt
        })
    }

    async find(id: string): Promise<Transaction> {

        const transaction = await TransactionModel.findOne({ where: { id: id } });

        const debitAcc = await AccountModel.findOne({ where: { id: transaction.debitedAccountId } });

        const creditAcc = await AccountModel.findOne({ where: { id: transaction.creditedAccountId } });

        if (!transaction) {
            throw new Error(`Transaction with id ${id} not found`)
        }

        return new Transaction({
            id: transaction.id,
            debitAccount: new Account({ id: debitAcc.id, balance: debitAcc.balance }),
            creditAccount: new Account({ id: creditAcc.id, balance: creditAcc.balance }),
            value: transaction.value,
            createdAt: transaction.createdAt
        });
    }

    async findAllFromAccount(accountId: string): Promise<Transaction[]> {

        const listTransactions = await TransactionModel.findAll({
            where: {
                [Op.or]: [
                    { debitedAccountId: accountId },
                    { creditedAccountId: accountId }
                ]
            }, include: [{ all: true }]
        });

        const transactions = listTransactions.map((transaction) =>
            new Transaction({
                id: transaction.id,
                debitAccount: new Account({ id: transaction.debitedAccount.id, balance: transaction.debitedAccount.balance }),
                creditAccount: new Account({ id: transaction.creditedAccount.id, balance: transaction.creditedAccount.balance }),
                value: transaction.value,
                createdAt: transaction.createdAt
            })
        )

        return transactions

    }
}