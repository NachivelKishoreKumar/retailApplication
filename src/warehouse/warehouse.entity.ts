import { Entity, Column,PrimaryColumn} from 'typeorm';

@Entity({name:'Warehouse',synchronize:false})
export class Warehouse {

    @PrimaryColumn()
    Admin_id : string;
    
    @Column()
    Password : string;
}