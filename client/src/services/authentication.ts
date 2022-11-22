import api from "./backend";
import cookie from "js-cookie";


type Authentication = {
    isAuthenticated: boolean,
    userId: string
    token: string
}

export const authentication = async (input): Promise<Authentication> => {

    const url = "authentication";

    const res = await api.post(url, input);

    const data: Authentication = res.data

    if (data.isAuthenticated) {
        cookie.set("token", data.token, { expires: 7 });
        cookie.set("user", data.userId)
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    }

    return res.data

};
