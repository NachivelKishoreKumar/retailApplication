import { Entity, Column,PrimaryColumn, OneToMany} from 'typeorm';

export enum ProductType {
    Phone,
    Tablet,
  }

@Entity({name:'Products',synchronize:false})
export class Products{
    @PrimaryColumn()
    Product_id : number;

    @Column()
    Product_name : string;

    @Column()
    Product_model : string;

    @Column()
    Availability : number;

    @Column()
    Rating : Number;

    @Column()
    Type : string;

    @Column()
    Product_Price : Number;

    /*@OneToMany(()=>Orders,orders=>orders.products)
    order:Orders[]*/

}