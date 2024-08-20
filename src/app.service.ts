import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('hi');
    return 'Welcome to Web3 World!';
  }
}
