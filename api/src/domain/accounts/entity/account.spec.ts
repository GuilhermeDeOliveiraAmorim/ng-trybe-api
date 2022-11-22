import Account from "./account";

describe("Account unit teste", () => {

    it("should create an account", () => {

        const account = new Account({ id: "123" });

        expect(account.id).toBe('123')
        expect(account.balance).toBe(100)
    })


    it("should update the balance of an account", () => {

        const account = new Account({ id: "123" });

        account.addCredit(100)

        expect(account.balance).toBe(200)
    })


    it("should create an account with balance", () => {

        const account = new Account({ id: "123", balance: 200 });

        expect(account.balance).toBe(200)
    })
})