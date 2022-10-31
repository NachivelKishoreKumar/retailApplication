import {Injectable , BadRequestException, NotFoundException} from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
const md5 = require('md5')
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService{
    constructor(private service: CustomersService,
                private jwtService : JwtService) {}

    async signUp(params){
        const users = await this.service.find(params.Email);
        
        if (users.length)
        {
            throw new BadRequestException("Username aready in use")
        }

        const result = md5(params.Password)
        params.Password=result

        const user = await this.service.create({...params})

        return user;


    }
        
    async signIn(email : string , password : string)
    {
        const [user] =await this.service.find(email);
        if(!user){
            throw new NotFoundException('User not found')
        }

        const hash = md5(password);

        if(user.Password!==hash){
            throw new BadRequestException("Bad Password")
        }
        
        const payload = { email : user.Email, password : user.Password };
        return{
            access_token: this.jwtService.sign((payload),{ expiresIn: '3000s' }),
        };

    }

    
}