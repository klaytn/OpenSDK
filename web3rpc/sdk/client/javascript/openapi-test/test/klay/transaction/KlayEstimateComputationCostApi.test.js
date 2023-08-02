const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
describe('Klay estimate computation cost  API', () => {
    test('should return result', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'string' && /^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };
        const callObject= {"from":"0x73718c4980728857f3aa5148e9d1b471efa3a7dd", "to":"0x069942a3ca0dabf495dba872533134205764bc9c", "value":"0x0", "input":"0x2a31efc7000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000003039"}
        const blockNumberOrHash = "latest"
        sdk.estimateComputationCost(callObject,blockNumberOrHash,{}, callbackOne);
    });
});
