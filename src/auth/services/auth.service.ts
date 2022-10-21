import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/services/user.service';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validate(email: string): Promise<User> {
    return await this.userService.getUserByEmail(email);
  }

  public async login(user: User): Promise<any | { status: number }> {
    return this.validate(user.email).then((userData) => {
      if (!userData || userData.password != this.hash(user.password)) {
        return { status: 404 };
      }
      const payload = `${userData.email}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expiresIn: 3600,
        access_token: accessToken,
      };
    });
  }

  private hash(password: string): string {
    return crypto.createHmac('sha256', password).digest('hex');
  }

  public async register(user: User) {
    user.password = this.hash(user.password);
    return this.userService.saveUser(user);
  }
}
