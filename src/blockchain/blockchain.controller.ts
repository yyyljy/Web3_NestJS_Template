import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private blockchainService: BlockchainService) {}

  @HttpCode(HttpStatus.OK)
  @Get('getBlockNumber')
  async getBlockNumber(): Promise<number> {
    return await this.blockchainService.getBlockNumber();
  }
}
