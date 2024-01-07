import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from "./dto/create-users.dto";
import {CreateContentDto} from "../contents/dto/create-content.dto";
import {UpdateContentDto} from "../contents/dto/update-content.dto";
import {UpdateUsersDto} from "./dto/update-users.dto";

@Controller('users')
export class UsersController {
  constructor(
      private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() usersDto: CreateUsersDto) {
    return this.usersService.add(usersDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() usersDto: UpdateUsersDto) {
    return this.usersService.update(id, usersDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAll()
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(id)
  }
}
