import { Table, Column, Model, PrimaryKey, DataType, AllowNull, Default, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "Stateinformation" })
export class Stateinformation extends Model<Stateinformation> {
    @PrimaryKey
    @AllowNull(false)
    @AutoIncrement
    @Column(DataType.INTEGER)
    metaID!: number;

    @AllowNull(true)
    @Default(false)
    @Column(DataType.BOOLEAN)
    metaAlreadyCreated!: boolean;
}
