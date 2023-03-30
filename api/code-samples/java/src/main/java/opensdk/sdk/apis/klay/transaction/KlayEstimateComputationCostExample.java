package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.models.EstimateComputationCost200Response;
import opensdk.sdk.models.KlayCallReqParamsInner;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayEstimateComputationCostExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayEstimateComputationCostExample() throws IOException {
        KlayCallReqParamsInner klayCallReqParamsInner = new KlayCallReqParamsInner();
        klayCallReqParamsInner.setFrom("0x73718c4980728857f3aa5148e9d1b471efa3a7dd");
        klayCallReqParamsInner.setTo("0x069942a3ca0dabf495dba872533134205764bc9c");
        klayCallReqParamsInner.setValue("0x0");
        klayCallReqParamsInner.setInput("0x2a31efc7000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000003039");
        String blockTag = "latest";

        EstimateComputationCost200Response response = sdk.klay.estimateComputationCost(klayCallReqParamsInner, blockTag).send();
    }
}
