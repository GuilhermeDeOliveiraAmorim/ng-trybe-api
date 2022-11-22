export interface FindTransactionInputDto {
    id: string
}

export interface FindTransactionOutputDto {
    id: string
    debitAccount: {
        id: string
        balance: number
    }
    creditAccount: {
        id: string
        balance: number
    }
    value: number
    createdAt: Date
}