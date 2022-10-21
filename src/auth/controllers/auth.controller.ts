import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  login(@Body() user: User): Promise<any> {
    return this.authService.login(user);
  }

  @Post('/register')
  register(@Body() user: User): Promise<any> {
    return this.authService.register(user);
  }
}
