'use strict'
require('dotenv').config()
const Hapi = require('@hapi/hapi');
const HapiPostgresConnection = require('hapi-postgres-connection');
const blockController = require('./src/controllers/blockController');
const transactionController = require('./src/controllers/transactionController');



const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost'
    });


    await server.register({
        plugin: HapiPostgresConnection
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello from hapi.js!';
        }
    });

    server.route({
        method: 'GET',
        path: '/api/blocks',
        handler: blockController.getLastBlock
    });

    server.route({
        method: 'GET',
        path: '/api/blocks/num/{blockNumber}',
        handler: blockController.getBlockHashByNumber
    });

    server.route({
        method: 'GET',
        path: '/api/blocks/hash/{blockHash}',
        handler: blockController.getBlockByHash
    });

    server.route({
        method: 'GET',
        path: '/api/blocks/{x}/{n}',
        handler: blockController.getXBlocksAfterN
    });

    server.route({
        method: 'GET',
        path: '/api/transactions/count',
        handler: transactionController.getTransactionsCount
    });

    server.route({
        method: 'GET',
        path: '/api/transactions/block/{blockHash}',
        handler: transactionController.getTransactionsFromBlock
    });

    server.route({
        method: 'GET',
        path: '/api/transactions/hash/{transactionHash}',
        handler: transactionController.getTransactionByHash
    });

    server.route({
        method: 'GET',
        path: '/api/transactions/{x}/{n}',
        handler: transactionController.getXTransactionsAfterNth
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();