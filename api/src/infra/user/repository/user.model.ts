import { Model, Table, PrimaryKey, BelongsTo, Column } from "sequelize-typescript";
import AccountModel from "../../account/repository/account.model";

@Table({
    tableName: "users",
    timestamps: false,
})

export default class UserModel extends Model {
    @PrimaryKey
    @Column({ allowNull: false })
    id: string;

    @Column({ allowNull: false })
    username: string;

    @Column({ allowNull: false })
    password: string;

    @Column({ allowNull: false })
    accountId: string;

    @BelongsTo(() => AccountModel, 'accountId')
    account: AccountModel;

}
