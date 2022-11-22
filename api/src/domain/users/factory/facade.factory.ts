import AuthenticateUserUseCase from "../../../application/usecases/user/authenticate_user/authenticate_user.usecase"
import CreateUserUseCase from "../../../application/usecases/user/create_user/craete_user.usecase"
import FindAllUsersUseCase from "../../../application/usecases/user/find_all_users/find_all_users.usecase"
import FindUserUseCase from "../../../application/usecases/user/find_user/find_user"
import AccountRepository from "../../../infra/account/repository/account.repository"
import UserRepository from "../../../infra/user/repository/user.repository"
import UserFacade from "../facade/user.facade"

export default class UserFacadeFactory {
    static create() {
        const userRepository = new UserRepository()
        const accountRespotory = new AccountRepository()
        const createUserUseCase = new CreateUserUseCase(userRepository, accountRespotory)
        const findUserUseCase = new FindUserUseCase(userRepository)
        const findAllUsersUseCase = new FindAllUsersUseCase(userRepository)
        const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)
        const userFacade = new UserFacade({
            createUseCase: createUserUseCase,
            findUseCase: findUserUseCase,
            findAllUsersUseCase: findAllUsersUseCase,
            authenticateUserUseCase: authenticateUserUseCase
        })

        return userFacade
    }
}