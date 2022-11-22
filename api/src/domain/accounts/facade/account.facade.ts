import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import AccountFacadeInterface, { CreateAccountFacadeInputDto, CreateAccountFacadeOutputDto, FindAccountFacadeInputDto, FindAccountFacadeOutputDto, UpdateAccountFacadeInputDto, UpdateAccountFacadeOutputDto } from './account.facade.interface'

export interface UseCaseProps {
    createAccountUseCase: UseCaseInterface
    findAccountUseCase: UseCaseInterface
    updateAccountUseCase: UseCaseInterface
}

export default class AccountFacade implements AccountFacadeInterface {

    private _createAccountUseCase: UseCaseInterface
    private _findAccountUseCase: UseCaseInterface
    private _updateAccountUseCase: UseCaseInterface

    constructor(useCaseProps: UseCaseProps) {
        this._createAccountUseCase = useCaseProps.createAccountUseCase
        this._findAccountUseCase = useCaseProps.findAccountUseCase
        this._updateAccountUseCase = useCaseProps.updateAccountUseCase
    }

    createAccount(input: CreateAccountFacadeInputDto): Promise<CreateAccountFacadeOutputDto> {
        return this._createAccountUseCase.execute(input)
    }

    findAccount(input: FindAccountFacadeInputDto): Promise<FindAccountFacadeOutputDto> {
        return this._findAccountUseCase.execute(input)
    }

    updateAccount(input: UpdateAccountFacadeInputDto): Promise<UpdateAccountFacadeOutputDto> {
        return this._updateAccountUseCase.execute(input)
    }
}