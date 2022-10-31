import { Entity, Column,PrimaryGeneratedColumn} from 'typeorm';

/*export enum Supporttype {
    Payment,
    OrderTracking,
    Login,
    Refund,
    Return
  }*/

@Entity({name:'Support',synchronize:true})
export class Support {
    
    @Column()
    Customer_email : string;
    
    @Column()
    Support_type : String;

    @Column()
    Support_query : string;

    @PrimaryGeneratedColumn()
    Support_id : number;

}
