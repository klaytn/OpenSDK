package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugIsPProfRunningResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugIsPProfRunningTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC debug_isPProfRunning")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugIsPProfRunningResponse response = w3.debugIsPProfRunning().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
    }
}
