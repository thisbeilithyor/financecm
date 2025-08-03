import { AutoIncrement, DataType, Model, PrimaryKey, Table, AllowNull, Column, Default } from "sequelize-typescript";

@Table({ tableName: "CustomerRequest" })
export class CustomerRequest extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    name?: string;

    @Column(DataType.STRING)
    email?: string;

    @Column(DataType.STRING)
    message?: string;

    @Column(DataType.STRING)
    phonenumber?: string;

    @Default(DataType.NOW)
    @Column(DataType.DATE)
    timestamp?: Date;
}