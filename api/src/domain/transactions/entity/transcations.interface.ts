import Account from "../../accounts/entity/account";


export default interface TransactionInterface {
    get id(): string;
    get debitAccount(): Account;
    get creditAccount(): Account
    get value(): number
    get createdAt(): Date
}