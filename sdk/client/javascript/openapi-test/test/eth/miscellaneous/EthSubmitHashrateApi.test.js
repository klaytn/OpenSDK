const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_submitHashrate API', () => {
    test('should return eth_submitHashrate', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const hashrate = '0x5'
        const id = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
        sdk.eth.submitHashrate(hashrate, id, {}, callbackOne);
    });
});