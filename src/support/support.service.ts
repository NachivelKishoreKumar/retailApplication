import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportDto } from './support.dto';
import { Support } from './support.entity';

@Injectable()
export class SupportService {

    @InjectRepository(Support) private supportRepository: Repository<Support>

    async createSupport(body:SupportDto)
    {
        const insertSupport = await this.supportRepository.create({...body})
        return this.supportRepository.save(insertSupport)
    }

    async viewSupport(email)
    {
            return this.supportRepository.find({where: [{ "Customer_email" : email }]});
    }


}
