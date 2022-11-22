import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import UserRepositoryInterface from "../../../../domain/users/repository/user.repository.interface";
import { AuthenticateUserInputDto, AuthenticateUserOutputDto } from "./authenticate_user.dto";
import jwt from 'jsonwebtoken'
import config from "../../../../infra/api/config";


export default class AuthenticateUserUseCase implements UseCaseInterface {

    private userRepository: UserRepositoryInterface

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    async execute(input: AuthenticateUserInputDto): Promise<AuthenticateUserOutputDto> {

        const user = await this.userRepository.findByUsername(input.username)

        const isAuthenticated = user.verifyPassword(input.password)

        if (!isAuthenticated) {
            throw new Error("the password is incorrect")
        }


        const payload = {
            id: user.id,
            username: user.username
        };

        const token = jwt.sign(payload, config.authSecret, { expiresIn: 36000 });

        if (!token) {
            throw new Error("Error signing token")
        }

        return {
            isAuthenticated: isAuthenticated,
            userId: user.id,
            token: token
        }
    }
}