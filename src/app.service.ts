import { Injectable } from '@nestjs/common';
import callContractMethod from 'lib/createContract';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const txHash = await callContractMethod({
      contract: contract,
      methodName: 'get',
      args: [],
    });
    console.log('txHash:', txHash);
    return 'Welcome to Web3 World!';
  }
}
