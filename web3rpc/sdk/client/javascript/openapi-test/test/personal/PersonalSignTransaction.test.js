const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");
const { getNonce, unlockAccount } = require("../../helpers/eth");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_signTransaction API', () => {
    test('should return personal_signTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data.raw).toMatch(/^0x[0-9a-fA-F]+$/)

            done();
        };
        unlockAccount().then(async address => {
            const password = "helloWorld";
            const nonce = await getNonce(address)
            sdk.signTransaction({
                "from": address,
                "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
                "value": "0x1",
                "gas": "0x9999",
                nonce
            }, password, {}, callbackOne);
        })
    });
});

