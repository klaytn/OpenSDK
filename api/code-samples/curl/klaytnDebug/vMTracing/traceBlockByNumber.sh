curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/debug/traceBlockByNumber' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "debug_traceBlockByNumber",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [1449]
}'
