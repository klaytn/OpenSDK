package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetUncleCountByBlockNumber;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import java.io.IOException;
import java.math.BigInteger;

public class EthGetUncleCountByBlockNumberExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));
    void ethGetUncleCountByBlockNumberExample() throws IOException {
        EthGetUncleCountByBlockNumber response = w3.ethGetUncleCountByBlockNumber(
            DefaultBlockParameter.valueOf(new BigInteger("e8", 16))
        ).send();
        response.getResult();
    }
}
