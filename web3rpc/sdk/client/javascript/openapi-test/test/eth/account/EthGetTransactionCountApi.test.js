// const OpenSdk = require("@klaytn/web3rpc");
// const { expect } = require("@jest/globals");
// const { RPC } = require("../../constant");

// const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

// describe('eth_getTransactionCount API', () => {
//     test('should return eth_getTransactionCount', (done) => {

//         let callbackOne = function (error, data, response) {
//             expect(error).toBeNull();
//             expect(data).toBeDefined()
//             expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
//             done();
//         };
//         const address = '0xc94770007dda54cF92009BFF0dE90c06F603a09f'
//         const blockNumberOrHashOrTag = 'latest'
//         sdk.eth.getTransactionCount(address, blockNumberOrHashOrTag, {}, callbackOne);
//     });
// });
