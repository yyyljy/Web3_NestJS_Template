import { ethers } from 'ethers';

export default async function isBlockFinalized(
  provider: ethers.Provider,
  blockNumber: number,
): Promise<boolean> {
  const latestFinaliedBlockNumber = (await provider.getBlock('finalized'))
    .number;
  return latestFinaliedBlockNumber >= blockNumber;
}
