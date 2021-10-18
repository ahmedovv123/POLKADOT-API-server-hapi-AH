const apiConnection = require("../../nodeConnection");

const connectApi = apiConnection.getNodeConnection().then((api) => {
    return api;
});
  

exports.getLastBlock = async (req, h) => {
    return connectApi.then(api => api.rpc.chain.getBlock())
}

exports.getBlockHashByNumber = async (req, h) => {
    const blockNumber = req.params.blockNumber;
    return connectApi.then(api => api.rpc.chain.getBlockHash(blockNumber));
}

exports.getBlockByHash = async (req, h) => {
    const blockHash = req.params.blockHash;
    return connectApi.then(api => api.rpc.chain.getBlock(blockHash));
}

exports.getXBlocksAfterN = async (req, h) => {
    const x = req.params.x;
    const n = req.params.n;

    return connectApi.then( async api => {
        let i = 1;
        let blocks = [];
        
        while (i <= x)  {
            let tempBlock = await api.rpc.chain.getBlockHash(n-i);
            blocks.push(tempBlock);
            i++;
        }

        return blocks;
    })

}