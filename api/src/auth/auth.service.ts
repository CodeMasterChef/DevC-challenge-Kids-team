import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(phoneNumber: string, password: string): Promise<any> {
    const user = await this.userService.findByPhone(phoneNumber);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}