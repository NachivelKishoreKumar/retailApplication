import { Orders } from 'src/orders/orders.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

export enum PaymentMode {
    UPI,
    DebitCard,
    CreditCard,
    COD,
    InternetBanking
  }

@Entity({name:'Purchase',synchronize:false})
export class Purchase {
    
    @Column()
    Customer_email : string;

    @PrimaryColumn()
    Order_id : number;

    @Column()
    Product_id : string;
    
    @Column()
    Product_Price : number;

    @Column()
    Mode_of_Payment : PaymentMode;

    @OneToOne(() => Orders)
    @JoinColumn()
    orders: Orders
}
