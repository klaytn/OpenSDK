const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    sdk.net.version({}, (err, data, response) => {
        console.log(data);
    });
}
)()