import { ethers } from 'ethers';

type Params = {
  contract: ethers.BaseContract;
  methodName: string;
  args: [];
};

export default async function callContractMethod({
  contract,
  methodName,
  args,
}: Params): Promise<string> {
  try {
    const contractFunction: ethers.ContractMethod =
      contract.getFunction(methodName);
    const txHash = await contractFunction(args);
    return txHash;
  } catch (error) {
    console.log(error);
    return error;
  }
}
