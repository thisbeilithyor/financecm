import { Table, Model, PrimaryKey, DataType, Column, AllowNull, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "FurtherImages" })
export class FurtherImages extends Model<FurtherImages>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number

    @AllowNull(false)
    @Column(DataType.STRING)
    imagePath!: string

    @AllowNull(false)
    @Column(DataType.INTEGER)
    objectnr!: number
}