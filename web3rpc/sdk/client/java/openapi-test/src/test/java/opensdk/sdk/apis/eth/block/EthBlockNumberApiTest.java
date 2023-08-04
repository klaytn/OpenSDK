package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthBlockNumber;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
class EthBlockNumberApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthBlockNumber br = w3.ethBlockNumber().send();
        assertNotNull(br);
        assertNull(br.getError());
        assertTrue(br.getResult().matches("^0x[0-9a-fA-F]+$"));
    }
}
