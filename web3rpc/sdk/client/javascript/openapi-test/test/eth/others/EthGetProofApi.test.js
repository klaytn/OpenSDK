// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getProof API', () => {
//     test('should return eth_getProof', (done) => {

//         let callbackOne = function (error, data, response) {
//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             expect(data.codeHash).toMatch(/^0x.*$/gm)
//             done();
//         };
//         const account = '0x487f2dfef230c2120b8cc55c5087b103146536ec'
//         const keys = ['0x0000000000000000000000000000000000000000000000000000000000000000']
//         const blockNumber = 'latest'
//         sdk.eth.getProof(account, keys, blockNumber, {}, callbackOne);
//     });
// });