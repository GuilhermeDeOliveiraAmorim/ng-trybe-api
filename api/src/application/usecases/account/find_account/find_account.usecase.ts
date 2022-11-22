import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import AccountRepositoryInterface from "../../../../domain/accounts/repository/account.repository";
import { InputFindAccountDto, OutputFindAccountDto } from './find_account.dto'

export default class FindAccountUseCase implements UseCaseInterface {
    private accountRepository: AccountRepositoryInterface

    constructor(accountRepository: AccountRepositoryInterface) {
        this.accountRepository = accountRepository
    }

    async execute(input: InputFindAccountDto): Promise<OutputFindAccountDto> {
        const account = await this.accountRepository.find(input.id);

        return {
            id: account.id,
            balance: account.balance
        }
    }

}