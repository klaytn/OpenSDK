package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminRemovePeerResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminRemovePeerExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminRemovePeerExample() throws IOException {
        String url = "kni://a979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c@10.0.0.1:32323";

        AdminRemovePeerResponse response = sdk.admin.removePeer(url).send();
        response.getResult();
    }
}
