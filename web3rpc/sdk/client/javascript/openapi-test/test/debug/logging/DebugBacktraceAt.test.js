const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_backtraceAt API', () => {
    test('should return debug_backtraceAt', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBe(null);
            done();
        };

        const location = "server.go:443";

        sdk.debug.backtraceAt(location, {}, callbackOne);
    });
});

