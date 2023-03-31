const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('Klay getRewards API', () => {
    test('should return info of a block number', (done) => {
        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined();
            done();
        };
        const blockNumberOrTag = 'latest';
        sdk.klay.getRewards(blockNumberOrTag,{}, callbackOne);
    });
});
