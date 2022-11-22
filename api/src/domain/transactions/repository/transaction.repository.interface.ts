import Transaction from "../entity/transactions"

export default interface TransactionRepositoryInterface {
    save(input: Transaction): Promise<void>
    find(id: string): Promise<Transaction>
    findAllFromAccount(accountId: string): Promise<Transaction[]>
}
