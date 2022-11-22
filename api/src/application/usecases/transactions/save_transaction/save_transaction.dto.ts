import Account from "../../../../domain/accounts/entity/account"

export interface SaveTransactionInputDto {
    debitAccountId: string
    creditAccountId: string
    value: number
}

export interface SaveTransactionOutputDto {
    id: string;
    debitAccount: {
        id: string
        balance: number
    };
    creditAccount: {
        id: string
        balance: number
    };
    value: number;
    createdAt: Date;
}