const {BankAccount} = require('./main.js')

const assert = require('assert');


describe ('Testing BankAccount Class', function(){
    it('should create a new account correctly', function(){
        let acct1 = new BankAccount ('xx4432', 'James Doe');
        assert.strictEqual(acct1.owner, 'James Doe');
        assert.strictEqual(acct1.accountNumber, 'xx4432');
        assert.strictEqual(acct1.transactions.length, 0);
        assert.strictEqual(acct1.transactions.balance, 0);
    })
    })

describe ('Testing account balance', function(){
    it('should create a new account correctly', function(){
        let acct1 = new BankAccount ('xx4432', 'James Doe');
        assert.strictEqual(acct1.balance(), 0);
        acct1.deposit(100);
        assert.strictEqual(acct1.balance(), 100);
        acct1.charge(10, 'Target')
        assert.strictEqual(acct1.balance(), 90);
        })
        })


describe ('Testing transaction creation', function(){
    it('should create a transaction correctly for deposit', function(){
        let t1 = new Transaction(30, 'Deposit');
        assert.strictEqual(t1.amount, 30);
        assert.strictEqual(t1.payee, 'Deposit');
        assert.notStrictEqual(t1.amount, undefined);
    })

    it('should create a transaction correctly for charge', function(){
        let t1 = new Transaction(-33, 'Target');
        assert.strictEqual(t1.amount, -33);
        assert.strictEqual(t1.payee, 'Target');
        assert.notStrictEqual(t1.amount, undefined);
    })
})