export interface InputFindUserDto {
    id: string
}

export interface OutputFindUserDto {
    id: string
    username: string
    account: {
        id: string;
        balance: number
    }
}