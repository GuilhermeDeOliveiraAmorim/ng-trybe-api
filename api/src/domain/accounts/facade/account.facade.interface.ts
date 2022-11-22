export interface CreateAccountFacadeInputDto { }

export interface CreateAccountFacadeOutputDto {
    id: string
    balance: number
}

export interface FindAccountFacadeInputDto {
    id: string
}

export interface FindAccountFacadeOutputDto {
    id: string
    balance: number
}

export interface UpdateAccountFacadeInputDto {
    id: string
    balance: number
}

export interface UpdateAccountFacadeOutputDto {
    id: string
    balance: number
}

export default interface AccountFacadeInterface {
    createAccount(input: CreateAccountFacadeInputDto): Promise<CreateAccountFacadeOutputDto>
    findAccount(input: FindAccountFacadeInputDto): Promise<FindAccountFacadeOutputDto>
    updateAccount(input: UpdateAccountFacadeInputDto): Promise<UpdateAccountFacadeOutputDto>
}