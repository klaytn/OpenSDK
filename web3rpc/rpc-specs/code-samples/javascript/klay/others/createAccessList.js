const OpenSdk = require("@klaytn/web3rpc");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    const callObject = {
        "from": "0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312",
        "to": "0x00f5f5f3a25f142fafd0af24a754fafa340f32c7",
        "gas": "0x3d0900",
        "gasPrice": "0x3b9aca00",
        "data": "0x20965255"
    }
    const blockParameter = 'latest'
    sdk.klay.createAccessList(callObject, { blockParameter }, (err, data, response) => {
        console.log(data);
    });
}
)()