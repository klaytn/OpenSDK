package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockByHashResponse;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugTraceBlockByHashTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC debug_traceBlockByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0x31c582be88975640ca619a0361a55018de384dc0eea2426edff55551d6eb1708";

        DebugTraceBlockByHashResponse response = w3.debugTraceBlockByHash(blockHash, null).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (!response.getResult().isEmpty()) {
            assertNotNull(response.getResult().get(0).getGas());
        }
    }
}
