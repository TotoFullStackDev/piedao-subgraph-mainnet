# PieDAO Subgraph
This is the official PieDAO Subgraph on Mainnet, still under development.
https://thegraph.com/explorer/subgraph/chiptuttofuso/piedao-subgraph-mainnet
## Important Notes
- when you automagically generate the code from an existing proxied contract, you should first generate the code using the original contract address, and then change the address to the proxied one into the subgraph.yaml file.
- when you are testing locally, it is important to properly configure the file under graph-node/docker/docker-compose.yml, and to set the environment:ethereum url to a correct working one.
- when it comes to build relations (one-to-one, one-to-many) if we use derived fields we must keep in mind that derived fields are built at query time, and not at indexing time. In other words, the array does not exist when the mapping code runs, so we can't operate with the array as we would normally do.