// https://eth-ropsten.alchemyapi.io/v2/SGf4PqnjzMkShZFtY6QHv2BFOAbqmmuf

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SGf4PqnjzMkShZFtY6QHv2BFOAbqmmuf',
      accounts: ['Your own Private Key from Metamask']
    }
  }
}
