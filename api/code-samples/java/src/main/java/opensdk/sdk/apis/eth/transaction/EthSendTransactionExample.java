package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSendTransactionResponse;
import org.klaytn.OpenSDK;
import org.web3j.protocol.core.methods.request.Transaction;

import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

public class EthSendTransactionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void ethSendTransactionExample() throws IOException, ExecutionException, InterruptedException {
        String address = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408";
        Transaction tx = new Transaction(address,null,null,new BigInteger("9999",16)
                ,"0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",new BigInteger("1",16),null,null
                ,new BigInteger("5d21dba00",16),new BigInteger("5d21dba00",16));
        EthSendTransactionResponse transactionResponse = sdk.eth.sendTransaction(tx).send();
        transactionResponse.getResult();
    }
}