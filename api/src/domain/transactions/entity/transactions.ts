import Account from "../../accounts/entity/account";
import TransactionsInterface from "./transcations.interface";
import { v4 as uuidv4 } from "uuid";

type TransactionProps = {
    id?: string
    debitAccount: Account
    creditAccount: Account
    value: number
    createdAt: Date
}

export default class Transaction implements TransactionsInterface {

    private _id: string
    private _debitAccount: Account
    private _creditAccount: Account
    private _value: number
    private _createdAt: Date

    constructor(props: TransactionProps) {
        this._id = props.id || uuidv4();
        this._creditAccount = props.creditAccount
        this._debitAccount = props.debitAccount
        this._value = props.value
        this._createdAt = props.createdAt
        this.validate()

    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("id is required");
        }

        if (this._creditAccount.id === this._debitAccount.id) {
            throw new Error("the transaction can't be made to the same account")
        }

        if (this._value <= 0) {
            throw new Error("transactions must have value greater than 0")
        }
    }

    get createdAt(): Date {
        return this._createdAt
    }

    get id(): string {
        return this._id
    }

    get debitAccount(): Account {
        return this._debitAccount
    }

    get creditAccount(): Account {
        return this._creditAccount
    }

    get value(): number {
        return this._value
    }
}