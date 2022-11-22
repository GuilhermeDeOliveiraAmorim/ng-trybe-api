import CreateAccountUseCase from "../../../application/usecases/account/create_account/create_account.usecase"
import FindAccountUseCase from "../../../application/usecases/account/find_account/find_account.usecase"
import UpdateAccountUseCase from "../../../application/usecases/account/update_account/update_account.usecase"
import AccountRepository from "../../../infra/account/repository/account.repository"
import AccountFacade from "../facade/account.facade"

export default class AccountFacadeFactory {
    static create() {
        const accRepository = new AccountRepository()
        const createAccountUseCase = new CreateAccountUseCase(accRepository)
        const findAccountUseCase = new FindAccountUseCase(accRepository)
        const updateAccountUseCase = new UpdateAccountUseCase(accRepository)
        const accountFacade = new AccountFacade({
            createAccountUseCase: createAccountUseCase,
            findAccountUseCase: findAccountUseCase,
            updateAccountUseCase: updateAccountUseCase

        })

        return accountFacade
    }
}