from base.testing import KlaytnBaseTesting


class TestSignTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionObject = {
            "from": "0x413ba0e5f6f00664598b5c80042b1308f4ff1408",
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            "nonce": "0x1",
            "gasPrice": "0x25000000000"
        }
        self.password = "helloWorld"

    def test_post(self):
        self.response = self.w3.geth.personal.sign_transaction(
            self.transactionObject, self.password
        )
        self.assertRegex(self.response["raw"], r'^0x[0-9a-fA-F]+$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.sign_transaction()

