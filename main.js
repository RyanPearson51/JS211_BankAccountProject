class BankAccount {
    accountNumber;  //string representing account number
    owner;          //string representing account owner
    transactions;   //array of transactions representing history of all transactions associated with the account

    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

    balance(){
        let sum = 0;
        for(let i=0; i<this.transactions.length; i++){
            sum += this.transactions[i].amount
        }
        return sum
    }

    deposit(amt){
        if (amt > 0){
            this.transactions.push(new Transaction(amt));
        }
        else {
            console.log('Please enter a positive number')
        }
        return;
    }

    charge(payee, amt){
        console.log(this.balance())
        if (this.balance() - amt >=0){
            this.transactions.push(new Transaction(-Math.abs(amt), payee));
        }
        else{
            console.log('***Alert: Account value too low***');
            return;
        }
    }
}



class Transaction {
    date;   //date of transaction
    amount; // amount of transaction. positive = money coming in, negative = money going out
    payee;  // description or payee on transaction

    constructor(amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}

let accountOne = new BankAccount('a1234', 'ryan');
let accountTwo = new BankAccount('b2345', 'bryan');

accountOne.deposit(400);
accountOne.deposit(200);
accountTwo.deposit(200);
accountTwo.deposit(4.50);


console.log('account one balance:', accountOne.balance()) //600
console.log('account two balance:', accountTwo.balance()); //204.50
accountOne.charge('store', 10);
accountTwo.charge('bills', 100);
accountTwo.charge('movies', 20)
console.log('account one balance:', accountOne.balance()); //590
console.log('account two balance:', accountTwo.balance()); //84.50
accountTwo.charge('hospital', 500);
console.log('account two balance:', accountTwo.balance()); //84.50, account value too low message

console.log(accountOne.owner); //ryan
console.log(accountOne.accountNumber); //a1234
console.log(accountOne);
console.log(accountTwo);







module.exports = {BankAccount}