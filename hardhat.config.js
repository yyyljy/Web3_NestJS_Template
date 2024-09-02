/** @type import('hardhat/config').HardhatUserConfig */
require('solidity-coverage');

module.exports = {
  solidity: '0.8.24',
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './contracts/artifacts',
  },
};
