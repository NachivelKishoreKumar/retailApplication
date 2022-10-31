import { Orders } from 'src/orders/orders.entity';
import { Entity, Column,PrimaryColumn, OneToMany} from 'typeorm';

@Entity({name:'Customers',synchronize:false})
export class Customers {

    @PrimaryColumn()
    Customer_id : string;

    @Column()
    Name : string;

    @Column()
    Contact : string;

    @Column()
    Email : string;

    @Column()
    Gender : string;

    @Column()
    Address : string;

    @Column()
    Password : string;

    @OneToMany(()=>Orders,orders=>orders.customer)
    order:Orders[]

}



