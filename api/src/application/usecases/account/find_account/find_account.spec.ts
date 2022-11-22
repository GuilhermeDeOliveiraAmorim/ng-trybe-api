import Account from "../../../../domain/accounts/entity/account";
import FindAccountUseCase from "./find_account.usecase";

const account = new Account({ id: "123" });

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(account)),
        findAll: jest.fn(),
        add: jest.fn(),
        update: jest.fn(),
    };
};

describe("Unit test find account usecase", () => {
    it("should find a account", async () => {
        const accountRepository = MockRepository();
        const usecase = new FindAccountUseCase(accountRepository)

        const input = { id: "123" };


        const result = await usecase.execute(input);

        const output = {
            id: "123",
            balance: 100,
        };
        expect(result).toEqual(output);
    })
})