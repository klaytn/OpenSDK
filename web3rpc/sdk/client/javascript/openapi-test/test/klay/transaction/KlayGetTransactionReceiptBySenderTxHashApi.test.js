const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionReceiptBySenderTxHash API', () => {
    test('should return klay_getTransactionReceiptBySenderTxHash', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            if (data !== null) {
                expect(/^0x[a-f0-9]+/.test(data.blockHash)).toBe(true);
            }
            done();
        };
        const senderTxHash = '0x2781f2f57b2587f6d9ad80a9e5f60158439d2548eebbc23bd806ecb856fe724e'
        sdk.getTransactionReceiptBySenderTxHash(senderTxHash, {}, callbackOne);
    });
});

