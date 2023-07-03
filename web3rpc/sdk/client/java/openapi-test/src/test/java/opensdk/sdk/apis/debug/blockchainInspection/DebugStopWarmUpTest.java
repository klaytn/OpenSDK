package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStopWarmUpResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugStopWarmUpTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Disabled
    @Test
    @DisplayName("RPC debug_stopWarmUp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStopWarmUpResponse response = w3.debugStopWarmUp().send();

        assertNull(response.getResult());
    }
}
