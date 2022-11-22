import { uuid } from "uuidv4";
import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Account from "../../../../domain/accounts/entity/account";
import AccountRepositoryInterface from "../../../../domain/accounts/repository/account.repository";
import User from "../../../../domain/users/entity/user.entity";
import UserRepositoryInterface from "../../../../domain/users/repository/user.repository.interface";
import { InputCreateUserDto, OutputCreateUserDto } from './create_user.dto'



export default class CreateUserUseCase implements UseCaseInterface {
    private userRepository: UserRepositoryInterface;
    private accountRepository: AccountRepositoryInterface

    constructor(
        userRepository: UserRepositoryInterface,
        accountRepository: AccountRepositoryInterface) {
        this.userRepository = userRepository;
        this.accountRepository = accountRepository
    }

    async execute(input: InputCreateUserDto): Promise<OutputCreateUserDto> {


        const alreadyAnUser = await this.userRepository.verifyUsername(input.username)

        if (alreadyAnUser) {
            throw new Error("this username already exists")
        }

        const account = new Account({})

        const userProps = {
            username: input.username,
            password: input.password,
            account: account
        }

        const user = new User(userProps)

        user.encryptPassword()

        await this.accountRepository.add(user.account)

        await this.userRepository.add(user);

        return {
            id: user.id,
            username: user.username,
            accountId: user.account.id
        }
    }
}


