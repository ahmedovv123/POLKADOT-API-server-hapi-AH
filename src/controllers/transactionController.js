exports.getTransactionsCount = async (req, h) => {
    result = await req.pg.client.query(`SELECT COUNT(*) AS count FROM transactions`);
    return  result?.rows;
}

exports.getTransactionsFromBlock = async (req, h) => {
    const blockHash = req.params.blockHash;
    const result = await req.pg.client.query(`SELECT * FROM transactions WHERE block_hash='${blockHash}'`);
    return result?.rows;
}

exports.getTransactionByHash = async (req, h) => {
    const transactionHash = req.params.transactionHash;
    const result = await req.pg.client.query(`SELECT * FROM transactions WHERE hash='${transactionHash}'`);
    return result?.rows;
}

exports.getXTransactionsAfterNth = async (req, h) => {
    const x = req.params?.x;
    const n = req.params?.n;
    const result = await req.pg.client.query(`SELECT * FROM transactions WHERE id < ${n} AND id > ${n} - ${x} LIMIT ${x}`);
    return result?.rows;
}

