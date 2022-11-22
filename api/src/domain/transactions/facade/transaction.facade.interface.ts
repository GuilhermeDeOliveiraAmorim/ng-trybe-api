import Account from "../../accounts/entity/account"
import Transaction from "../entity/transactions"

export interface SaveTransactionInputDto {
    debitAccountId: string
    creditAccountId: string
    value: number
}

export interface SaveTransactionOutputDto {
    id: string
    debitAccount: Account
    creditAccount: Account
    value: number
    createdAt: Date
}

export interface FindTransactionInputDto {
    id: string
}

export interface FindTransactionOutputDto {
    id: string
    debitAccount: Account
    creditAccount: Account
    value: number
    createdAt: Date
}

export interface FindTransactionsFromAccountInputDto {
    accountId: string
}

export interface FindTransactionsFromAccountOutputDto {
    transactions: {
        id: string
        debitAccountId: string
        creditAccountId: string
        value: number
        createdAt: Date
    }[]
}



export default interface TransactionFacadeInterface {
    saveTransaction(input: SaveTransactionInputDto): Promise<SaveTransactionOutputDto>
    findTransaction(input: FindTransactionInputDto): Promise<FindTransactionOutputDto>
    findTransactionsFromAccount(input: FindTransactionsFromAccountInputDto): Promise<FindTransactionsFromAccountOutputDto>
}