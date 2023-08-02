const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.TxpoolApi(new OpenSdk.ApiClient(RPC));

describe('txpool_content API', () => {
    test('should return txpool_content', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toHaveProperty('pending' || 'queued')
            done();
        };

        sdk.content({}, callbackOne);
    });
});

