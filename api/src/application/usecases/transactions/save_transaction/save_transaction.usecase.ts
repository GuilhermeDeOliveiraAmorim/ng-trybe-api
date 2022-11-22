import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Account from "../../../../domain/accounts/entity/account";
import AccountRepositoryInterface from "../../../../domain/accounts/repository/account.repository";
import Transaction from "../../../../domain/transactions/entity/transactions";
import TransactionRepositoryInterface from "../../../../domain/transactions/repository/transaction.repository.interface";
import { SaveTransactionInputDto, SaveTransactionOutputDto } from "./save_transaction.dto";

export default class SaveTransactionUseCase implements UseCaseInterface {

    private _accountRepository: AccountRepositoryInterface
    private _transactionRepository: TransactionRepositoryInterface

    constructor(
        accountRepository: AccountRepositoryInterface,
        transactionRepository: TransactionRepositoryInterface) {
        this._accountRepository = accountRepository;
        this._transactionRepository = transactionRepository
    }

    async execute(input: SaveTransactionInputDto): Promise<SaveTransactionOutputDto> {

        const debitAcc = await this._accountRepository.find(input.debitAccountId)

        const creditAcc = await this._accountRepository.find(input.creditAccountId)

        const transactionProps = {
            debitAccount: debitAcc,
            creditAccount: creditAcc,
            value: input.value,
            createdAt: new Date()
        }

        const transaction = new Transaction(transactionProps)

        transaction.creditAccount.addCredit(transaction.value)

        transaction.debitAccount.subtractCredit(transaction.value)

        await this._transactionRepository.save(transaction)

        await this._accountRepository.update(transaction.creditAccount)

        await this._accountRepository.update(transaction.debitAccount)

        return {
            id: transaction.id,
            debitAccount: { id: transaction.debitAccount.id, balance: transaction.debitAccount.balance },
            creditAccount: { id: transaction.creditAccount.id, balance: transaction.creditAccount.balance },
            value: transaction.value,
            createdAt: transaction.createdAt
        }
    }
}