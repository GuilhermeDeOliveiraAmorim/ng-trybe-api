import Transaction from "../../../../domain/transactions/entity/transactions"

export interface ListTransactionsFromAccountInputDto {
    accountId: string
}

export interface ListTransactionsFromAccountOutputDto {
    transactions: {
        id: string
        debitAccountId: string
        creditAccountId: string
        value: number
        createdAt: Date
    }[]

}

