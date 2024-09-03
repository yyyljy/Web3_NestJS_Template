import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';

export class Web3Lib {
  chainId: number;
  #provider: ethers.Provider;
  #runner: ethers.Wallet;

  constructor(
    private configService: ConfigService,
    chainId: number,
  ) {
    this.chainId = chainId;
  }

  #getBlockchainConfig() {
    return this.configService.get(`blockchain.${this.chainId}`);
  }

  #getJsonRpcUrl({ name }: { name: string }) {
    const envName = name.toUpperCase().replace(' ', '_');
    return this.configService.get(envName);
  }

  #setProvider() {
    const name = this.#getBlockchainConfig().name;
    const url = this.#getJsonRpcUrl({ name });
    this.#provider = new ethers.JsonRpcProvider(url);
  }

  init() {
    this.#setProvider();
  }

  getProvider() {
    return this.#provider;
  }

  setRunnerByPvKey({ privateKey }) {
    this.#runner = new ethers.Wallet(privateKey);
  }

  setOperatorRunnerByEnv({ dotenvName }) {
    const pvKeyName = dotenvName ?? 'OPERATOR_PRIVATE_KEY';
    const pvKey = this.configService.get(pvKeyName);
    this.#runner = new ethers.Wallet(pvKey);
  }

  getContract({
    address,
    abi,
  }: {
    address: string;
    abi: ethers.Interface | ethers.InterfaceAbi;
  }) {
    return new ethers.Contract(address, abi, this.#runner);
  }
}
