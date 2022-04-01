import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAccountDto, User } from './dto/account-request.dto';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule { }
