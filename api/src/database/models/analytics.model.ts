import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, AllowNull, Default } from "sequelize-typescript";

@Table({ tableName: "Analytics" })
export class Analytics extends Model<Analytics> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    ipaddr?: string;

    @AllowNull(false)
    @Default(DataType.NOW)
    @Column(DataType.DATE)
    timestamp!: Date;

    @AllowNull(false)
    @Column(DataType.STRING)
    path!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    userAgent?: string;
}
