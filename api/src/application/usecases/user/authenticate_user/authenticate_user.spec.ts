import CreateUserUseCase from "../create_user/craete_user.usecase";
import AuthenticateUserUseCase from "./authenticate_user.usecase";

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

        const input = { username: "helderprado", password: '123456' };

        const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)

        await createAccountUseCase.execute(input);

        const output = await authenticateUserUseCase.execute(input)

        expect(output.isAuthenticated).toBe(true)
    })

})