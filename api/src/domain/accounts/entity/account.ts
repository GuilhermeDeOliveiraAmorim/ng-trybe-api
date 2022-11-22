import AccountInterface from "./account.interface"
import { v4 as uuidv4 } from "uuid";

type AccountProps = {
    id?: string
    balance?: number
}

export default class Account implements AccountInterface {

    private _id: string
    private _balance: number

    constructor(props: AccountProps) {
        this._id = props.id || uuidv4();
        this._balance = props.balance || 100
        this.validate()
    }

    validate() {
        if (this._balance < 0) {
            throw new Error("the account doesn't has the amount for the transaction.")
        }
    }

    get id(): string {
        return this._id
    }

    get balance(): number {
        return this._balance
    }

    addCredit(quantity: number): void {
        this._balance = this._balance + quantity
        this.validate()
    }

    subtractCredit(quantity: number): void {
        this._balance = this._balance - quantity
        this.validate()
    }

}