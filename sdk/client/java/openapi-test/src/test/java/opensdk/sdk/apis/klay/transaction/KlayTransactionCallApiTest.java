package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.Call200Response;
import opensdk.sdk.models.KlayCallObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author Tungnd
 * @since 27/03/2023 4:24 PM
 */
@DisplayName("Klay RPC Test")
public class KlayTransactionCallApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_call")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // given
        KlayCallObject callObject = new KlayCallObject();
        callObject.setFrom("0x3f71029af4e252b25b9ab999f77182f0cd3bc085");
        callObject.setTo("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        callObject.setGas("0x100000");
        callObject.setGasPrice("0x5d21dba00");
        callObject.setValue("0x0");
        callObject.setInput("0x8ada066e");
        String blockTag = "latest";
        // when
        Call200Response response = sdk.klay.call(callObject, blockTag).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
