const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_spamThrottlerConfig API', () => {
    test('should return admin_spamThrottlerConfig', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBeTruthy();
            expect(typeof data['activate_tx_pool_size'] === 'number').toBeTruthy();
            done();
        };
        // TODO check spam throttler in advance.
        sdk.spamThrottlerConfig({}, callbackOne);
    });
});
