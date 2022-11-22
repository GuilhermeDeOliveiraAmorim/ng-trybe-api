import { Model, Table, PrimaryKey, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import AccountModel from "../../account/repository/account.model";


@Table({
    tableName: "transactions",
    timestamps: false,
})
export default class TransactionModel extends Model {
    @PrimaryKey
    @Column({ allowNull: false })
    id: string;

    @Column({ allowNull: false })
    value: number;

    @Column({ allowNull: false })
    createdAt: Date;

    @ForeignKey(() => AccountModel)
    @Column
    debitedAccountId: string;

    @ForeignKey(() => AccountModel)
    @Column
    creditedAccountId: string;

    @BelongsTo(() => AccountModel, 'debitedAccountId')
    debitedAccount: AccountModel;

    @BelongsTo(() => AccountModel, 'creditedAccountId')
    creditedAccount: AccountModel;
}
