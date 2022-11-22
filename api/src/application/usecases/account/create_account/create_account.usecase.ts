import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Account from "../../../../domain/accounts/entity/account";
import AccountRepositoryInterface from "../../../../domain/accounts/repository/account.repository";
import { InputCreateAccountDto, OutputCreateAccountDto } from './create_account.dto'

export default class CreateAccountUseCase implements UseCaseInterface {

    private _accountRepository: AccountRepositoryInterface;

    constructor(accountRepository: AccountRepositoryInterface) {
        this._accountRepository = accountRepository;
    }

    async execute(input: InputCreateAccountDto): Promise<OutputCreateAccountDto> {
        const account = new Account(input)

        await this._accountRepository.add(account);

        return {
            id: account.id,
            balance: account.balance
        }
    }
}