import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import UserRepositoryInterface from "../../../../domain/users/repository/user.repository.interface";
import { FindAllUsersInputDto, FindAllUsersOutputDto } from "./find_all_users.dto";

export default class FindAllUsersUseCase implements UseCaseInterface {

    private _userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository
    }

    async execute(input: FindAllUsersInputDto): Promise<FindAllUsersOutputDto> {

        const users = await this._userRepository.findAll(input)

        const output = users.map((user) => ({
            id: user.id,
            accountId: user.account.id,
            username: user.username
        }))

        return {
            users: output
        }
    }
}