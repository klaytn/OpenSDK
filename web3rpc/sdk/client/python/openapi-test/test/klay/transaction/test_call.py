from base.testing import KlaytnBaseTesting


class TestKlayCall(KlaytnBaseTesting):
    
    def setUp(self) -> None:
        super().setUp()
        self.callObject = {
            "from": "0x3f71029af4e252b25b9ab999f77182f0cd3bc085",
            "to": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
            "gas": "0x100000",
            "gasPrice": "0x5d21dba00",
            "value": "0x0",
            "input": "0x8ada066e"
        }
        self.blockTag = 'latest'

    def test_post(self):
        self.response = self.w3.klay.call(
            self.callObject, self.blockTag
        )
        self.assertRegex(self.response, r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.call(self.callObject)
