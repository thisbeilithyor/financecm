import { Table, Column, Model, PrimaryKey, DataType, AllowNull } from "sequelize-typescript";

@Table({ tableName: "Immobilie" })
export class Immobilie extends Model<Immobilie> {
    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.INTEGER)
    objectnr!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    city?: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    description?: string;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    house?: boolean;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    price?: number;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    squareMeters?: number;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    bathroom?: boolean;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    supermarket?: boolean;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    electricity?: boolean;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    water?: boolean;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    pool?: boolean;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    garden?: boolean;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    atOcean?: boolean;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    paymentDuration?: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    buildingFinished?: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    uberDasProjekt?: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    uberStandort?: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    titleImagePath!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    mapImagePath?: string;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    carouselObject?: boolean;
}
