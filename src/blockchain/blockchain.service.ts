import { Injectable } from '@nestjs/common';

@Injectable()
export class BlockchainService {
  async getBlockNumber(): Promise<number> {
    return 1;
  }
}
