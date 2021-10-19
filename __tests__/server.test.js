const jestOpenAPI = require('jest-openapi');
const axios = require('axios');
const path = require('path');
require('dotenv').config()

jestOpenAPI.default(path.join(__dirname, '../openapi/openapi.yml'));

describe('GET api/blocks', () => {
    it('should satisfy OpenAPI spec', async() => {
        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/blocks`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/blocks/{x}/{nth}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const x = 5;
        const nth = 1512532;

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/blocks/${x}/${nth}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/blocks/num/{num}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const num = '1000';

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/blocks/num/${num}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/blocks/hash/{blockHash}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const blockHash = '0x4f61e8e6017cce5a10e2de7340061a037895411c19e7bc27f607953d8a56a943';

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/blocks/hash/${blockHash}`);
        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/accounts/count/', () => {
    it('should satisfy OpenAPI spec', async() => {
        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/accounts/count`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/address/transactions/count/{adr}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const adr = '1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF';

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/accounts/transactions/count/${adr}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/address/transactions/{adr}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const adr = '1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF';

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/accounts/transactions/${adr}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/address/balance/{adr}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const adr = '1743nDTMZisPgBCYSAgkUn1kVG7MePc9rvMEjoRNf4ipVkF';

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/accounts/balance/${adr}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/transactions/count/', () => {
    it('should satisfy OpenAPI spec', async() => {
        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/transactions/count`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/transactions/block', () => {
    it('should satisfy OpenAPI spec', async() => {
        const blockHash = '0x527dbeb44ff53d4a805d72e1350ad76fd6e86116a1ba34c6d058f752bcc5db36';

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/transactions/block/${blockHash}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/transactions/hash/{transactionHash}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const transactionHash = '0x2261184f6bd42eb775f2a55477ce65e7d710a535a8c9da98441908bc2ba87170';

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/transactions/hash/${transactionHash}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});

describe('GET /api/transactions/{x}/{n}', () => {
    it('should satisfy OpenAPI spec', async() => {
        const x = 5;
        const n = 10;

        const res = await axios.get(`http://${process.env.SERVER_ADDRESS}/api/transactions/${x}/${n}`);

        expect(res.status).toEqual(200);

        expect(res).toSatisfyApiSpec();
    });
});