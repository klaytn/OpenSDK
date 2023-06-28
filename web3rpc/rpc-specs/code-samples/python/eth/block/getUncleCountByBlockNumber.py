from web3 import Web3
from web3py_ext import extend

host = "https://api.baobab.klaytn.net:8651"

blockTag = "0xe8"

w3 = Web3(Web3.HTTPProvider(host))
eth_response = w3.eth.get_uncle_count_by_block_number(blockTag)

print(eth_response)
