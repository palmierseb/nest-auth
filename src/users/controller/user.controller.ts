import {
  Body,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Controller,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  get(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Get()
  getAll() {
    return this.userService.getUsers();
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.saveUser(user);
  }

  @Put()
  update(@Body() user: User) {
    return this.userService.saveUser(user);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.userService.deleteUser(params.id);
  }
}
