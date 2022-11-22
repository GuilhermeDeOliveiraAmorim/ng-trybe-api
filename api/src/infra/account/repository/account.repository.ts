import AccountRepositoryInterface from "../../../domain/accounts/repository/account.repository"
import Account from "../../../domain/accounts/entity/account";
import AccountModel from "./account.model";


export default class AccountRepository implements AccountRepositoryInterface {

    async add(account: Account): Promise<void> {
        await AccountModel.create({
            id: account.id,
            balance: account.balance
        });
    }

    async find(id: string): Promise<Account> {
        const accountDb = await AccountModel.findOne({ where: { id: id } });

        if (!accountDb) {
            throw new Error(`Account with id ${id} not found`);
        }

        return new Account({ id: accountDb.id, balance: accountDb.balance });
    }

    async update(account: Account): Promise<void> {

        await AccountModel.update({
            id: account.id,
            balance: account.balance
        }, {
            where: { id: account.id },
        })
    }
}
