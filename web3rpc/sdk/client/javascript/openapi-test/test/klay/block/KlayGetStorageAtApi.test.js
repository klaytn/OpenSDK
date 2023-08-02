const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_getStorageAt API', () => {
    test('should return klay_getStorageAt', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };
        const storageAddress = '0x295a70b2de5e3953354a6a8344e616ed314d7251'
        const position = '0x0'
        const blockNumberOrHash = 'latest'
        sdk.getStorageAt(storageAddress, position, blockNumberOrHash, {}, callbackOne);
    });
});
