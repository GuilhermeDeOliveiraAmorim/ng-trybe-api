import FindTransactionUseCase from "../../../application/usecases/transactions/find_transaction/find_transaction.use.case"
import FindTransactionsFromAccountUseCase from "../../../application/usecases/transactions/find_transactions_from_account/find_transactions_from_account.usecase"
import SaveTransactionUseCase from "../../../application/usecases/transactions/save_transaction/save_transaction.usecase"
import AccountRepository from "../../../infra/account/repository/account.repository"
import TransactionRepository from "../../../infra/transaction/repository/transaction.repository"
import TransactionFacade from "../facade/transaction.facade"


export default class TransactionFacadeFactory {
    static create() {
        const transactionRepo = new TransactionRepository()
        const accRepo = new AccountRepository()
        const saveTransactionUseCase = new SaveTransactionUseCase(accRepo, transactionRepo)
        const findTransactionUseCase = new FindTransactionUseCase(accRepo, transactionRepo)
        const findFromAccountUseCase = new FindTransactionsFromAccountUseCase(transactionRepo)
        const accountFacade = new TransactionFacade({
            saveUseCase: saveTransactionUseCase,
            findUseCase: findTransactionUseCase,
            findFromAccountUseCase: findFromAccountUseCase
        })

        return accountFacade
    }
}