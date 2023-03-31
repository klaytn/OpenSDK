package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GetCode200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetCodeApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getCode")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GetCode200Response gr = sdk.klay.getCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "0x2")
        .send();
        gr.getResult();
    }
}
