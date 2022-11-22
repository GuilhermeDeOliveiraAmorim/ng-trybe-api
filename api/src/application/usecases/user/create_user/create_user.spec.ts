import CreateUserUseCase from "./craete_user.usecase";

const input = { username: "john", password: '123456' };

const MockRepository = () => {
    return {
        find: jest.fn(),
        add: jest.fn(),
        update: jest.fn(),
        findAll: jest.fn(),
        findByUsername: jest.fn(),
        verifyUsername: jest.fn()
    };
};

describe("Unit test create user use case", () => {

    it("should create an user", async () => {
        const userRepository = MockRepository();
        const accountRepostory = MockRepository();

        const createAccountUseCase = new CreateUserUseCase(
            userRepository, accountRepostory
        );

        const output = await createAccountUseCase.execute(input);

        expect(output.id).toEqual(expect.any(String));
        expect(output.username).toBe(input.username)
        expect(output.accountId).toEqual(expect.any(String));
    })

})