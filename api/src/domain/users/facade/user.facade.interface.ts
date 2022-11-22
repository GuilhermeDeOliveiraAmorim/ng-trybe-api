export interface CreateUserFacadeInputDto {
    username: string
    password: string
}

export interface CreateUserFacadeOutputDto {
    id: string
    username: string
    accountId: string
}

export interface FindUserFacadeInputDto {
    id: string
}

export interface FindUserFacadeOutputDto {
    id: string
    username: string
    accountId: string
}

export interface FindAllUsersFacadeInputDto { }

export interface FindAllUsersFacadeOutputDto {
    users: {
        id: string
        username: string
        accountId: string
    }[]
}

export interface AuthenticateUserFacadeInputDto {
    username: string
    password: string
}

export interface AuthenticateUserFacadeOutputDto {
    isAuthenticated: boolean
}

export default interface UserFacadeInterface {
    createUser(input: CreateUserFacadeInputDto): Promise<CreateUserFacadeOutputDto>
    findUser(input: FindUserFacadeInputDto): Promise<FindUserFacadeOutputDto>
    findAllUsers(input: FindAllUsersFacadeInputDto): Promise<FindAllUsersFacadeOutputDto>
    authenticateUser(input: AuthenticateUserFacadeInputDto): Promise<AuthenticateUserFacadeOutputDto>
}