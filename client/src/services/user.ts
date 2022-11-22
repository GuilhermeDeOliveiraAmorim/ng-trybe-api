import api from "./backend";

type IUser = {
    id: string
    username: string
    account: {
        id: string;
        balance: number
    }
}

export interface CreateUserInputDto {
    username: string
    password: string
}

export interface OutputCreateUserDto {
    id: string
    username: string
    accountId: string
}

const postUser = async (input: CreateUserInputDto): Promise<OutputCreateUserDto> => {
    const url = `user/`

    const res = await api.post(url, input);

    return res.data
}

const getUser = async (input: string): Promise<IUser> => {
    const url = `user/${input}`

    const res = await api.get(url);

    return res.data
}

const getUsers = async () => {

    const url = `user/`

    const res = await api.get(url);

    const data = res.data;

    return data
};

export { getUser, getUsers, postUser }