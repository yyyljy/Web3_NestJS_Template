import { ethers } from 'ethers';

export default function compareEvmAddress(
  address1: string,
  address2: string,
): boolean {
  try {
    if (!ethers.isAddress(address1) || !ethers.isAddress(address2))
      throw new Error(`address1 or address2 is not address`);
    return address1.toUpperCase() === address2.toUpperCase();
  } catch (error) {
    console.log(error);
    return false;
  }
}
