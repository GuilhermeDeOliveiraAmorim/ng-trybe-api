import CreateAccountUseCase from "./create_account.usecase";

const input = {};

const MockRepository = () => {
    return {
        find: jest.fn(),
        add: jest.fn(),
        update: jest.fn()
    };
};

describe("Unit test create account use case", () => {

    it("should create an account", async () => {
        const accountRepository = MockRepository();
        const createAccountUseCase = new CreateAccountUseCase(
            accountRepository
        );
        const output = await createAccountUseCase.execute(input);

        expect(output).toEqual({
            id: expect.any(String),
            balance: 100,
        });
    })

})