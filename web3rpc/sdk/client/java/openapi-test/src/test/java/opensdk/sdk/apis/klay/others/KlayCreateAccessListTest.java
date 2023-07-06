package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayCallObject;
import org.web3j.protocol.klaytn.core.method.response.KlayCreateAccessListResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayCreateAccessListTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_createAccessList")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayCallObject object = new KlayCallObject();
        object.setFrom("0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312");
        object.setTo("0x00f5f5f3a25f142fafd0af24a754fafa340f32c7");
        object.setGas("0x3d0900");
        object.setGasPrice("0x3b9aca00");
        object.setInput("0x20965255");

        KlayCreateAccessListResponse response = w3.klayCreateAccessList(object , "latest").send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getGasUsed());
        assertTrue(response.getResult().getGasUsed().matches("^0x[a-fA-F0-9]+"));
    }

}
