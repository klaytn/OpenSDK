const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('klay_getAccountKey API', () => {
    test.skip('should return accountKey', (done) => {

        let callbackOne = function (error, data, response) {
            
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const address = '0x1cbd3b2770909d4e10f157cabc84c7264073c9ec'
        const blockNumberOrHash = 'latest'
        sdk.klay.getAccountKey(address,blockNumberOrHash, {}, callbackOne);
    });
});
