const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('klay_getDecodedAnchoringTransactionByHash API', () => {
    test('should return klay_getDecodedAnchoringTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const hashOfTransaction = '0x026b64e16b86633c0199f78f37a64840d3601d83e5c799f115b63024764524ca'
        sdk.klay.getDecodedAnchoringTransactionByHash(hashOfTransaction, {}, callbackOne);
    });
});
