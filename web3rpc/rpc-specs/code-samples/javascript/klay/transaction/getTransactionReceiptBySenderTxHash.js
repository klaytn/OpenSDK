const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const senderTxHash = '0x2781f2f57b2587f6d9ad80a9e5f60158439d2548eebbc23bd806ecb856fe724e'
    
    sdk.klay.getTransactionReceiptBySenderTxHash(senderTxHash, {}, (err, data, response) => {
        console.log(data);
    });

}
)()