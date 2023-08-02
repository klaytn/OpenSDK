const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const tx = {
        "from": "0x413ba0e5f6f00664598b5c80042b1308f4ff1408",
        "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
        "value": "0x1"
    };
    const passphrase = "helloWorld";

    sdk.personal.sendTransaction(tx, passphrase, {}, (err, data, response) => {
        console.log(data);
    });
}
)()