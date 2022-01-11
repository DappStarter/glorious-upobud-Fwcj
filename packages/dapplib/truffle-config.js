require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind puppy hunt beauty flip gesture'; 
let testAccounts = [
"0xa57c5596f0b0e466fef99e31b42cf863643b5b814b7d5adb9978d29bd0af8c2d",
"0x614de3231987212f6a4472da88a1fc4d8c5d21c0d6fcfd3164371c690056f668",
"0x9836b87136448381420202f205df1a40ffe977002a8cf53e131f7068de39565d",
"0xb41de3a6b9ec549078e92a27c1a505a45b2b604798cef9cfd55a5ac17428061e",
"0xfea23e58689ba330eb6354d9e3404c728a8e5b39ffdf84d844d2595bc6ebec9d",
"0xd63f4e61a0e91062b804110ae3c4963af7be16346f97ce2a50d90324891d6067",
"0x3a896574d3f0ae3fe76392358a17f703fec47375f0136de2f567c88614accd74",
"0x2323743d40f40c493e22a6d8471ab78d00f87e5bd9a4a0681d8d6c63f3e400b9",
"0x887037caa517cd8ba643001c9a97e579dfae35c4e1fbd81370e2bfbc228f14a1",
"0x0fa64aff2489df3931938d3ea0ec829beb78fad2d8d8b7fc491fa6eb23c25cb0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

