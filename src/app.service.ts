import { Injectable } from '@nestjs/common';
// import callContractMethod from 'lib/createContract';

@Injectable()
export class AppService {
  getHello(): string {
    // this.configService.get<number>('PORT');
    // const txHash = await callContractMethod({
    //   contract: contract,
    //   methodName: 'get',
    //   args: [],
    // });
    // console.log('txHash:', txHash);
    console.log('Hi Hi');
    return 'Welcome to Web3 World!';
  }
}
