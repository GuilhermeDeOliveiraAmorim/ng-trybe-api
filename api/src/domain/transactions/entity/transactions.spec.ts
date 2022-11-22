import Account from "../../accounts/entity/account";
import Transaction from "./transactions";

describe("Transaction unit teste", () => {

    it("should throw error when id creditAccount is equal to debitAccount", () => {
        expect(() => {

            const props = {
                id: "1",
                creditAccount: new Account({ id: "1" }),
                debitAccount: new Account({ id: "1" }),
                createdAt: new Date(),
                value: 100
            }

            const account = new Transaction(props);
        }).toThrowError("the transaction can't be made to the same account");
    })
})