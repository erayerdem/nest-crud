import { IsEmail, IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class CreateAccountDto {
  
  
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  surname: string;
  
  
  phoneNumber: number;
  
  @IsEmail()
  email : string ;

  companyName: string;

  companyWebsite: string;

  location  : string 

}



@Entity()
export class User {
  


  @PrimaryGeneratedColumn()
  id?: number; 

  @Column({nullable:false})
  name: string;
  
  @Column({nullable:false})
  surname: string;
  
  @Column({nullable:false,type:'bigint',name:"phone_number"})
  phoneNumber: number;
  
  @Column({nullable:false})
  email : string ;

  @Column({nullable:false,name:"company_name"})
  companyName: string;

  @Column({nullable:false,name:"company_website"})
  companyWebsite: string;

  @Column({nullable:false})
  location  : string 

}