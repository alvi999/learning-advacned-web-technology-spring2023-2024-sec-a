import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { Repository } from 'typeorm';
import { Login } from 'src/entities/login.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateLoginDto } from './dto/update-login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login) private readonly loginRepo: Repository<Login>,
  ) {}
 
  async create(createLoginDto: CreateLoginDto) {
  
    const login = await this.loginRepo.create(createLoginDto);
    return await this.loginRepo.save(login);
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
