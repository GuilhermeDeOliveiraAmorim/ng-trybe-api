import UseCaseInterface from "../../../../domain/@shared/usecase/use-case.interface";
import Account from "../../../../domain/accounts/entity/account";
import AccountRepositoryInterface from "../../../../domain/accounts/repository/account.repository";
import { UpdateAccountInputDto, UpdateAccountOutputDto } from "./update_account.dto";

export default class UpdateAccountUseCase implements UseCaseInterface {
    private accountRepository: AccountRepositoryInterface

    constructor(accountRepository: AccountRepositoryInterface) {
        this.accountRepository = accountRepository
    }

    async execute(input: UpdateAccountInputDto): Promise<UpdateAccountOutputDto> {

        const account = new Account(input)

        await this.accountRepository.update(account);

        return {
            id: account.id,
            balance: account.balance
        }
    }

}