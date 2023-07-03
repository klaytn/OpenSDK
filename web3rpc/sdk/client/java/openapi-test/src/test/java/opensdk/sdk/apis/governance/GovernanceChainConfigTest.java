package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceChainConfigResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.LinkedHashMap;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Governance RPC Test")
public class GovernanceChainConfigTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC governance_chainConfig")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceChainConfigResponse response = w3.governanceChainConfig().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (response.getResult() instanceof LinkedHashMap<?,?>) {
            LinkedHashMap<?,?> result = (LinkedHashMap<?,?>)response.getResult();
            assertTrue(result.containsKey("chainId"));
        }
    }
}
