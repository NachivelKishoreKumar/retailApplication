import { Customers } from 'src/customers/customers.entity';
import { Products } from 'src/products/products.entity';
import { Purchase } from 'src/purchase/purchase.entity';
import { Entity, Column,PrimaryColumn, ManyToOne, OneToMany, JoinColumn, OneToOne} from 'typeorm';

@Entity({name:'Orders',synchronize:false})
export class Orders{
    @Column()
    Customer_email : string;

    @PrimaryColumn()
    Order_id : number;

    @Column()
    P_id : string;

    @ManyToOne(()=>Customers,customer=>customer.order)
    customer:Customers

    /*@ManyToOne(()=>Products,products=>products.order)
    products:Products*/

    @OneToOne(() => Purchase)
    purchase: Purchase

}

