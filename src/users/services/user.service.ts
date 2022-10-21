import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUserById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  getUserByEmail(email: string): Promise<User> | undefined {
    return this.userRepository.findOneBy({ email });
  }

  saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  deleteUser(user: User): void {
    this.userRepository.delete(user);
  }
}
