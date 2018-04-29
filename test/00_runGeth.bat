del .\testchain\geth\chaindata\*

rem # geth --datadir ./testchain init genesis.json

rem # geth --datadir ./testchain --unlock 0 --password ./testpassword --rpc --rpccorsdomain '*' --rpcport 8646 --rpcapi "eth,net,web3,debug" --port 32323 --mine --minerthreads 1 --maxpeers 0 --targetgaslimit 994712388 console
geth --dev --dev.period 0 --datadir ./testchain --rpc --rpccorsdomain '*' --rpcport 8646 --rpcapi "eth,net,web3,personal,txpool,debug" --port 32323 --maxpeers 0 --targetgaslimit 994712388 --cache 2048 console

