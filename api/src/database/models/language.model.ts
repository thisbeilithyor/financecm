import { Table, Column, Model, PrimaryKey, DataType, AllowNull, Default, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "Language" })
export class Language extends Model<Language> {
    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.INTEGER)
    languageID!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    language!: string;
}
