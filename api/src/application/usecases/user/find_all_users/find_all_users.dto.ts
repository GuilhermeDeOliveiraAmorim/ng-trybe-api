export interface FindAllUsersInputDto { }

export interface FindAllUsersOutputDto {
    users: {
        id: string
        username: string
        accountId: string
    }[]
}