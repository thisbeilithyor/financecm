import { AllowNull, AutoIncrement, DataType, Model, PrimaryKey, Table, Column, Default } from "sequelize-typescript";

@Table({ tableName: "User" })
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    username!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password!: string;

    @AllowNull(false)
    @Default(false)
    @Column(DataType.BOOLEAN)
    admin!: boolean;
}