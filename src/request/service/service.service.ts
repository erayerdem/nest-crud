import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateAccountDto, User } from './dto/account-request.dto';

@Injectable()
export class ServiceService {
   
   
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
    createAccount(req: CreateAccountDto) {
       
       

        const user: User = {          
            companyName : req.companyName,
            companyWebsite : req.companyWebsite,
            email : req.email,
            location : req.location,
            name : req.name,
            phoneNumber : req.phoneNumber,
            surname : req.surname,
        }

        console.log("hello");
        this.usersRepository.save(user);

    }


    getAccounts(){
        return  this.usersRepository.find();
    }

    getAccountByİd(param: number) {
        return  this.usersRepository.findOne({id:param});
    }

    getAccountByName(param: string) {
        console.log(param);
        return  this.usersRepository.findOne({
           
                name : param
            
        });
    }
}
