import { Body, Controller, HttpCode, HttpStatus, Post, Req, Get, Param, HttpException, UseFilters, UsePipes, ValidationPipe, BadRequestException, ValidationError } from '@nestjs/common';
import { MyExceptionFilter } from 'src/filter/exception-filter';
import { CreateAccountDto } from './dto/account-request.dto';
import { ServiceService } from './service.service';

@Controller('account')
@UseFilters(new MyExceptionFilter())
export class ServiceController {
constructor(private  service : ServiceService){}

    @Post() 
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({ transform: false , disableErrorMessages :false ,exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      }, })) 
    async createNewRequest(@Body() req : CreateAccountDto ){
       
            await  this.service.createAccount(req);
 
    } 

    @Get() 
    @HttpCode(HttpStatus.OK)
    async findAll(){

      const value =  await  this.service.getAccounts();
      return value; 

    } 

    @Get(":id") 
    @HttpCode(HttpStatus.OK)
    async findBY(@Param("id") param :number){
      const value =  await  this.service.getAccountByİd(param);
      return value; 

    } 

    @Get("byname/:name") 
    @HttpCode(HttpStatus.OK)
    async findByName(@Param("name") param :string){
    
      const value =  await  this.service.getAccountByName(param);
      return value; 

    } 
}

