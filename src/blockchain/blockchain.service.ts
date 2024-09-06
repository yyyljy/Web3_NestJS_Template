import { Injectable } from '@nestjs/common';
import { GetBalanceDto } from './blockchain.type';

@Injectable()
export class BlockchainService {
  //TODO : if(name) 조건 변경
  async getChainId({ name }: { name: string }) {
    if (name) return { name: name, chainId: 1 };
    else return { code: 404 };
  }

  //TODO : provider 호출 기능 추가
  async getBalance({ address, tag }: GetBalanceDto): Promise<GetBalanceDto> {
    console.log(address, tag);
    return { address, tag, balance: 1 };
  }

  //TODO : provider 호출 기능 추가
  async getBlockNumber(): Promise<number> {
    return 1;
  }
}
