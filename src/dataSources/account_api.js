const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class AccountAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.account_api_url;
    }
    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/accounts', account);
    }
    async accountByUsername(producto) {
        return await this.get(`/accounts/${producto}`);
    }
    async createTransaction(transaction) {
        transaction = new Object(JSON.parse(JSON.stringify(transaction)));
        return await this.post('/transactions', transaction);
    }
    async transactionByUsername(producto) {
        return await this.get(`/transactions/${producto}`);
    }
}
module.exports = AccountAPI;