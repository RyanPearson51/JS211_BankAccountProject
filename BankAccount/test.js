const {BankAccount} = require('./main.js')

const assert = require('assert');


describe ('Testing BankAccount Class', function(){
    it('should create a new account correctly', function(){
        let acct1 = new BankAccount ('xx4432', 'James Doe');
        assert.strictEqual(acct1.owner, 'James Doe');
        assert.strictEqual(acct1.accountNumber, 'xx4432');
        assert.strictEqual(acct1.transactions.length, 0);
    })
}