import Account from "../entity/account"

export default interface AccountRepositoryInterface {
    add(account: Account): Promise<void>
    find(id: string): Promise<Account>
    update(account: Account): Promise<void>
}
