package opensdk.sdk.apis.klay.account;

import opensdk.sdk.models.GetCode200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCodeExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGetCodeExample() throws IOException {
        GetCode200Response gr = sdk.klay.getCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "0x2")
        .send();
        gr.getResult();
    }
}
