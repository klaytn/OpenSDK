const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay getBlockByHash API', () => {
    test('should return block.', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.hash).toMatch(new RegExp(`^0x?`));
            done();
        };
        const blockHash = '0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577'
        const returnTransactionObject=true
        sdk.getBlockByHash(blockHash,returnTransactionObject, {},callbackOne);
    });
});
