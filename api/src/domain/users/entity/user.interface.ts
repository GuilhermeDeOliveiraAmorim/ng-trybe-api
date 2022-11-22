import Account from "../../accounts/entity/account";

export default interface UserInterface {
    get id(): string;
    get username(): string;
    get account(): Account;
}
