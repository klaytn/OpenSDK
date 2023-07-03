from base.testing import KlaytnBaseTesting


class TestStatus(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.txpool.status()
        self.assertIn("pending", self.response) or self.assertIn("queued", self.response)
