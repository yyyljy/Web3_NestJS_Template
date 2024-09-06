import { IsIn, IsNumber, IsString, Length, Matches } from 'class-validator';

export class GetChainIdDto {
  @IsString()
  name: string;
}

export class GetBalanceDto {
  @IsString()
  address: `0x${string}`;

  @IsString()
  @IsIn(['latest', 'earliest', 'pending', 'safe', 'finalized'])
  tag: string;

  @IsNumber()
  balance?: number;
}

export class GetTransactionByHashDto {
  @IsString()
  @Length(32, 32, { message: 'String must be exactly 32 characters long' })
  @Matches(/^[\x00-\x7F]*$/, { message: 'String must be 32 bytes long' })
  hash: string;

  blockHash?: string | null;
  blockNumber?: number | null;
  from?: string;
  gas?: number;
  gasPrice?: number;
  input?: string;
  nonce: number;
  to: string;
  transactionIndex: number | null;
  value: number;
}
