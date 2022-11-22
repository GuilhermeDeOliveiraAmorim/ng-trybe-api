import { Model, Table, PrimaryKey, Column, HasOne } from "sequelize-typescript";
import UserModel from "../../user/repository/user.model";

@Table({
    tableName: "accounts",
    timestamps: false,
})
export default class AccountModel extends Model {

    @PrimaryKey
    @Column({ allowNull: false })
    id: string;

    @Column({ allowNull: false })
    balance: number;

}
