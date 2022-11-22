import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import UserRepositoryInterface from "../../../../domain/users/repository/user.repository.interface";
import { InputFindUserDto, OutputFindUserDto } from './find_user.dto'

export default class FindUserUseCase implements UseCaseInterface {

    private userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    async execute(input: InputFindUserDto): Promise<OutputFindUserDto> {
        const user = await this.userRepository.find(input.id);

        return {
            id: user.id,
            username: user.username,
            account: {
                id: user.account.id,
                balance: user.account.balance
            }
        }
    }
}