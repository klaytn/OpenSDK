from base.testing import KlaytnBaseTesting
from base.eth import unlock_account


class TestSendTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.klaytnTransactionTypes = {
            "from": unlock_account(),
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            "maxFeePerGas": "0x5d21dba00",
            "maxPriorityFeePerGas": "0x5d21dba00"
        }

    def test_post(self):
        self.response = self.w3.klay.send_transaction(
            self.klaytnTransactionTypes
        )
        self.assertRegex(self.response, r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.send_transaction()
