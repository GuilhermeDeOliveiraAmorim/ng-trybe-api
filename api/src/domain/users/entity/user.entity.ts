import Account from "../../accounts/entity/account";
import UserInterface from "./user.interface"
import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcryptjs'

type UserProps = {
    id?: string
    username: string
    password: string
    account: Account
}

export default class User implements UserInterface {

    private _id: string
    private _username: string
    private _password: string
    private _account: Account

    constructor(props: UserProps) {
        this._id = props.id || uuidv4();
        this._username = props.username;
        this._password = props.password;
        this._account = props.account
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        if (this._username.length === 0) {
            throw new Error("Name is required");
        }

        if (this._password.length === 0) {
            throw new Error("Password is required");
        }
    }

    get id(): string {
        return this._id
    }

    get username(): string {
        return this._username
    }

    get password(): string {
        return this._password
    }

    get account(): Account {
        return this._account
    }

    encryptPassword() {
        this._password = bcrypt.hashSync(this._password)
    }

    verifyPassword(password: string): boolean {
        const verified = bcrypt.compareSync(password, this._password);
        return verified
    }

}