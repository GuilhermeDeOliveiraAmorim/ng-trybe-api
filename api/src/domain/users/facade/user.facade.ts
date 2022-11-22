import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import UserFacadeInterface, { AuthenticateUserFacadeInputDto, AuthenticateUserFacadeOutputDto, CreateUserFacadeInputDto, CreateUserFacadeOutputDto, FindAllUsersFacadeInputDto, FindAllUsersFacadeOutputDto, FindUserFacadeInputDto, FindUserFacadeOutputDto } from "./user.facade.interface";

export interface UseCaseProps {
    createUseCase: UseCaseInterface
    findUseCase: UseCaseInterface
    findAllUsersUseCase: UseCaseInterface
    authenticateUserUseCase: UseCaseInterface
}

export default class UserFacade implements UserFacadeInterface {

    private _createUseCase: UseCaseInterface
    private _findUseCase: UseCaseInterface
    private _findAllUsersUseCase: UseCaseInterface
    private _authenticateUserUseCase: UseCaseInterface

    constructor(useCaseProps: UseCaseProps) {
        this._createUseCase = useCaseProps.createUseCase
        this._findUseCase = useCaseProps.findUseCase
        this._findAllUsersUseCase = useCaseProps.findAllUsersUseCase
        this._authenticateUserUseCase = useCaseProps.authenticateUserUseCase
    }

    createUser(input: CreateUserFacadeInputDto): Promise<CreateUserFacadeOutputDto> {
        return this._createUseCase.execute(input)

    }

    findUser(input: FindUserFacadeInputDto): Promise<FindUserFacadeOutputDto> {
        return this._findUseCase.execute(input)
    }

    findAllUsers(input: FindAllUsersFacadeInputDto): Promise<FindAllUsersFacadeOutputDto> {
        return this._findAllUsersUseCase.execute(input)
    }

    authenticateUser(input: AuthenticateUserFacadeInputDto): Promise<AuthenticateUserFacadeOutputDto> {
        return this._authenticateUserUseCase.execute(input)
    }
}