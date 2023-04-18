from base.testing import KlaytnBaseTesting


class TestPendingChanges(KlaytnBaseTesting):

    def test_post(self):
        governance_response = self.sdk.governance.pending_changes()

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
