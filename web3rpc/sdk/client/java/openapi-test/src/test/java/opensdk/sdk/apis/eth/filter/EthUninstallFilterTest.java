package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthUninstallFilter;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Eth RPC Test")
public class EthUninstallFilterTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_uninstallFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        BigInteger filterId = new BigInteger("b", 16);
        EthUninstallFilter response = w3.ethUninstallFilter(filterId).send();
        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult()instanceof Boolean);
    }
}
