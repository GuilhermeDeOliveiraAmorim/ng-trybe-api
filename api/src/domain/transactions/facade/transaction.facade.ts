import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import TransactionFacadeInterface, { FindTransactionInputDto, FindTransactionOutputDto, FindTransactionsFromAccountInputDto, FindTransactionsFromAccountOutputDto, SaveTransactionInputDto, SaveTransactionOutputDto } from "./transaction.facade.interface";


export interface UseCaseProps {
    saveUseCase: UseCaseInterface
    findUseCase: UseCaseInterface
    findFromAccountUseCase: UseCaseInterface
}

export default class TransactionFacade implements TransactionFacadeInterface {

    private _saveUseCase: UseCaseInterface
    private _findUseCase: UseCaseInterface
    private _findFromAccountUseCase: UseCaseInterface

    constructor(useCaseProps: UseCaseProps) {
        this._saveUseCase = useCaseProps.saveUseCase
        this._findUseCase = useCaseProps.findUseCase
        this._findFromAccountUseCase = useCaseProps.findFromAccountUseCase
    }

    saveTransaction(input: SaveTransactionInputDto): Promise<SaveTransactionOutputDto> {
        return this._saveUseCase.execute(input)
    }

    findTransaction(input: FindTransactionInputDto): Promise<FindTransactionOutputDto> {
        return this._findUseCase.execute(input)
    }

    findTransactionsFromAccount(input: FindTransactionsFromAccountInputDto): Promise<FindTransactionsFromAccountOutputDto> {
        return this._findFromAccountUseCase.execute(input)
    }
}