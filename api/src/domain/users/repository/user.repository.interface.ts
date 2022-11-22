import User from "../entity/user.entity";

export default interface UserRepositoryInterface {
    add(user: User): Promise<void>
    find(id: string): Promise<User>
    findAll({ }): Promise<User[]>
    findByUsername(username: string): Promise<User>
    verifyUsername(username: string): Promise<boolean>
}
