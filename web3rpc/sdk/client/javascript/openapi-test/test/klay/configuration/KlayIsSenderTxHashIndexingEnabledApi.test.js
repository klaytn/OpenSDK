const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_isSenderTxHashIndexingEnabled API', () => {
    test('should return klay_isSenderTxHashIndexingEnabled', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'boolean').toBe(true);
            done();
        };

        sdk.isSenderTxHashIndexingEnabled({}, callbackOne);
    });
});

