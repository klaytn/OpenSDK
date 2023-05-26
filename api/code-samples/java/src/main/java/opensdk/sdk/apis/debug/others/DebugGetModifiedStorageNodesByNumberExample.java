package org.web3j.protocol.klaytn.core.klaytnDebug.others;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGetModifiedStorageNodesByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class DebugGetModifiedStorageNodesByNumberExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
  void debugGetModifiedStorageNodesByNumberExample() throws IOException {
    String address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6";
    Integer startBlockNum = 100;
    Integer endBlockNum = 200;
    DebugGetModifiedStorageNodesByNumberResponse response = sdk.debug.getModifiedStorageNodesByNumber(
        address, startBlockNum, endBlockNum).send();
    response.getResult();
  }

}
