const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_nodeAddress API', () => {
    test('should return klay_nodeAddress', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toMatch(/0x[a-fA-F0-9]+/);
            done();
        };

        sdk.nodeAddress({}, callbackOne);
    });
});
