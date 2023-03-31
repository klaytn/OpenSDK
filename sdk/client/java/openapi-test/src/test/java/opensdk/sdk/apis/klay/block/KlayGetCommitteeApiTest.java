package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GetCommittee200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetCommitteeApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getCommittee")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GetCommittee200Response gr = sdk.klay.getCommittee(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
