import { Table, Model, PrimaryKey, AutoIncrement, AllowNull, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "Checklist"})
export class Checklist extends Model<Checklist> {
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
    phonenumber?: string;

    @Column(DataType.STRING)
    immobilientyp?: string;
    
    @Column(DataType.STRING)
    kaufzeitraum?: string;
}