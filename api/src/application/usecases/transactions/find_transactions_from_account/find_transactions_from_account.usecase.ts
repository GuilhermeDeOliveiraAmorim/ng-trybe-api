import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import TransactionRepositoryInterface from "../../../../domain/transactions/repository/transaction.repository.interface";
import { ListTransactionsFromAccountInputDto, ListTransactionsFromAccountOutputDto } from "./find_transactions_from_account.dto";

export default class FindTransactionsFromAccountUseCase implements UseCaseInterface {
    private _transactionRepository: TransactionRepositoryInterface

    constructor(transactionRepository: TransactionRepositoryInterface) {
        this._transactionRepository = transactionRepository
    }

    async execute(input: ListTransactionsFromAccountInputDto): Promise<ListTransactionsFromAccountOutputDto> {

        const transactions = await this._transactionRepository.findAllFromAccount(input.accountId)

        return {
            transactions: transactions.map((transaction) => ({
                id: transaction.id,
                debitAccountId: transaction.debitAccount.id,
                creditAccountId: transaction.creditAccount.id,
                value: transaction.value,
                createdAt: transaction.createdAt
            }))
        }

    }
}