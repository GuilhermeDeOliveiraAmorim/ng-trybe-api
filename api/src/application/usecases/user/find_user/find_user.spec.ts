import Account from "../../../../domain/accounts/entity/account";
import User from "../../../../domain/users/entity/user.entity";
import FindUserUseCase from "./find_user";


const account = new Account({ id: "123" });

const user = new User({ id: "123", username: "john", password: "123456", account: account })

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(user)),
        findAll: jest.fn(),
        add: jest.fn(),
        update: jest.fn(),
        findByUsername: jest.fn(),
        verifyUsername: jest.fn()
    };
};

describe("Unit test find user usecase", () => {
    it("should find an user", async () => {
        const accountRepository = MockRepository();

        const usecase = new FindUserUseCase(accountRepository)

        const input = { id: "123" };

        const result = await usecase.execute(input);

        const output = {
            id: "123",
            balance: 100,
        };

        expect(result.id).toBe("123");
        expect(result.username).toBe("john")
        expect(result.account.id).toBe("123")
    })
})