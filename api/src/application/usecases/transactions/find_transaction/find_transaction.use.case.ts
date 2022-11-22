import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Account from "../../../../domain/accounts/entity/account";
import AccountRepositoryInterface from "../../../../domain/accounts/repository/account.repository";
import TransactionRepositoryInterface from "../../../../domain/transactions/repository/transaction.repository.interface";
import { FindTransactionInputDto, FindTransactionOutputDto } from './find_transaction.dto'

export default class FindTransactionUseCase implements UseCaseInterface {

    private _transactionRepository: TransactionRepositoryInterface
    private _accountRepository: AccountRepositoryInterface

    constructor(
        accountRepository: AccountRepositoryInterface,
        transactionRepository: TransactionRepositoryInterface) {
        this._transactionRepository = transactionRepository,
            this._accountRepository = accountRepository
    }

    async execute(input: FindTransactionInputDto): Promise<FindTransactionOutputDto> {
        const transaction = await this._transactionRepository.find(input.id)

        const debitAccount = await this._accountRepository.find(transaction.debitAccount.id)

        const creditAccount = await this._accountRepository.find(transaction.creditAccount.id)

        return {
            id: transaction.id,
            debitAccount: { id: debitAccount.id, balance: debitAccount.balance },
            creditAccount: { id: creditAccount.id, balance: creditAccount.balance },
            value: transaction.value,
            createdAt: transaction.createdAt
        }
    }

}