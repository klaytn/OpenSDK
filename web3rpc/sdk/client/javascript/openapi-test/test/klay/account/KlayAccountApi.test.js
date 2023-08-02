const OpenSdk = require("@klaytn/web3rpc");
const {expect} = require("@jest/globals");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay account API', () => {
    test('should return false for Not_Found', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBe(true);
            expect(data.length > 0 ? data.every((address) => /^0x[a-fA-F0-9]+/.test(address)) : true).toBe(true)
            done();
        };
        sdk.accounts({}, callbackOne);
    });
});
