from base.testing import KlaytnBaseTesting


class TestKlayGetAccountKey(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722"
        self.blockTag = "latest"

    def test_post(self):
        self.response = self.w3.klay.get_account_key(
            self.address, self.blockTag
        )
        if self.response is not None:
            self.assertIsInstance(self.response["keyType"], int)
        else:
            self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_account_key(self.blockTag)

