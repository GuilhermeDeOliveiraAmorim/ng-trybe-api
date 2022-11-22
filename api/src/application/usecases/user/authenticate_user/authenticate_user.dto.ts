export interface AuthenticateUserInputDto {
    username: string
    password: string
}

export interface AuthenticateUserOutputDto {
    isAuthenticated: boolean
    userId: string
    token: string
}