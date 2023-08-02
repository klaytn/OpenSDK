const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getBlockWithConsensusInfoByHash API', () => {
    test('should return klay_getBlockWithConsensusInfoByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.hash).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data.hash)).toBe(true);
            done();
        };
        const blockHash = '0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577'
        sdk.getBlockWithConsensusInfoByHash(blockHash, {}, callbackOne);
    });
});
