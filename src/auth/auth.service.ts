import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const user = {
      userId: 'test',
      password: 'test',
      username: 'tester',
    };
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '30m',
      }),
    };
  }

  async decodeAuth({ authorization }: { authorization: string }) {
    return this.jwtService.decode(authorization);
  }
}
