const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

    const transactionObject = {
        "from": "0x487f2dfef230c2120b8cc55c5087b103146536ec",
        "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
        "value": "0x1",
        "gas": "0x9999",
        "maxFeePerGas": "0x5d21dba00",
        "maxPriorityFeePerGas": "0x5d21dba00"
    }
    
    sdk.eth.sendTransaction(transactionObject, {}, (err, data, response) => {
        console.log(data);
    });
}
)()