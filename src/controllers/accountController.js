const apiConnection = require('../../nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
    return api;
});

exports.getAccountsCount = async (req, h) => {
    const result = await req.pg.client.query(`SELECT COUNT(DISTINCT recipient)+COUNT(DISTINCT sender) AS count FROM transactions`);
    return result?.rows;
}

exports.getAccountTransactionsCount = async (req, h) => {
    const accountId = req.params.accountId;
    const result = await req.pg.client.query(`SELECT COUNT(*) AS count FROM transactions WHERE sender='${accountId}' OR recipient='${accountId}'`);
    return result?.rows;
}

exports.getAccountTransactions = async (req, h) => {
    const accountId = req.params.accountId;
    const result = await req.pg.client.query(`SELECT * FROM transactions WHERE recipient='${accountId}' OR sender='${accountId}'`);
    return result?.rows;
}

exports.getAccountBalance = async (req, h) => {
    const accountId = req.params.accountId;
    return connectApi.then(api => api.query.system.account(accountId));
}
