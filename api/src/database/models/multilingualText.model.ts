import { Table, Column, Model, PrimaryKey, DataType, AllowNull, Default } from "sequelize-typescript";

@Table({ tableName: "MultilingualText" })
export class MultilingualText extends Model<MultilingualText> {
    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.INTEGER)
    objectnr!: number;

    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.INTEGER)
    languageID!: number;
    
    @AllowNull(true)
    @Column(DataType.STRING)
    city?: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    description?: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    uberDasProjekt?: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    uberStandort?: string;
}
