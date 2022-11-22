import api from "./backend";

const getUserTransactions = async (accountId: string) => {

    const url = `transaction/from_account/${accountId}`

    const res = await api.get(url);

    const data = res.data;

    return data
};

const sendMoney = async (input) => {

    const url = `transaction/`

    const res = await api.post(url, input);

    const data = res.data;

    return data
};


export { getUserTransactions, sendMoney }