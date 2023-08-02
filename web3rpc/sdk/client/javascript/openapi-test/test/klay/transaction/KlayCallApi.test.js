const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");


const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
describe('Eth transaction call API', () => {
    test('should return result', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };
        const callObject = {
            "from": "0x3f71029af4e252b25b9ab999f77182f0cd3bc085",
            "to": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
            "gas": "0x100000",
            "gasPrice": "0x5d21dba00",
            "value": "0x0",
            "input": "0x8ada066e"
        }
        const blockTag = 'latest'
        sdk.call(callObject, blockTag, {}, callbackOne);
    }, 50000);
});
