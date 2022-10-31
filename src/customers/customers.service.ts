import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers} from './customers.entity';



@Injectable()
export class CustomersService {
    constructor(
                @InjectRepository(Customers) private customersRepository: Repository<Customers>,
                ) { }
    
    
    async create(params) {
        const user = await this.customersRepository.create({...params})

        return this.customersRepository.save(user)
    }

    find(email :string){
        return this.customersRepository.find({where: [{ "Email" : email }]});
    }



    async deleteCustomer(id:string){
        const deleteCustomer= await this.customersRepository.findOne({where : [{Customer_id:id}]});
        return await this.customersRepository.delete(deleteCustomer)
    }

    async updateCustomer(id : string, attrs){
        const user = await this.customersRepository.findOne({where: [{ "Customer_id": id }]})
        Object.assign(user,attrs)
        return await this.customersRepository.save(user)
    }

    async displayCustomers(){

        return await this.customersRepository.find({
            select: ["Customer_id", "Name", "Contact","Email","Gender","Address"]
    })
        
    }

}
