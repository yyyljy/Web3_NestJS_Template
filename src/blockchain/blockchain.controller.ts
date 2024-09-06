import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { Response } from 'express';
import { GetBalanceDto, GetChainIdDto } from './blockchain.type';

@Controller('blockchain')
export class BlockchainController {
  constructor(private blockchainService: BlockchainService) {}

  @Post('getChainId')
  async getChainId(
    @Body() { name }: GetChainIdDto,
    @Res() res: Response,
  ): Promise<object> {
    console.log(name);
    const response = await this.blockchainService.getChainId({
      name,
    });

    if (response?.code)
      return res.status(response?.code).send(`Chain Name ${name} Not Found`);
    else return res.status(200).send(response);
  }

  @HttpCode(HttpStatus.OK)
  @Get('getBalance')
  async getBalance({ address, tag }: GetBalanceDto): Promise<GetBalanceDto> {
    return await this.blockchainService.getBalance({
      address,
      tag,
    });
  }

  @HttpCode(HttpStatus.OK)
  @Get('getBlockNumber')
  async getBlockNumber(): Promise<number> {
    return await this.blockchainService.getBlockNumber();
  }
}
