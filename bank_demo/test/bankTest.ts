import { Bank } from '../src/bank';

// setup

console.log("");
console.log("Tests for setup");

const accounts = [{ id: 1234567890, balance: 3448 },
{ id: 1234567891, balance: 2424 }];

const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);

// Scenario 1: customer is able to create a new bank account
const acc = bank.createAccount('user1', 23, 1234567892);
if(acc.id !== 1234567892 || acc.balance !== 0 || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    const acc1 = bank.createAccount('user1', 23, 1234567892);
    console.log('Scenario 1 failed');   
}
catch(e) {
    console.log('Scenario 1 passed');
}

// Scenario 2: customer is unable to create a new bank account due to invalid age

try {
    bank.createAccount('user1', 17, 1234567893);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: customer is unable to create a new bank account due to invalid username

try {
    bank.createAccount('user3', 23, 1234567894);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

console.log("");
console.log("Tests for issue #3");

// issue #3: Check the balance of an account.

// Scenario 1: The user tries to view their balance

try {
    if(bank.getBalance(1234567890) == 3448) {
        console.log('Scenario 1 passed');
    } else {
        console.log('Scenario 1 failed');
    }
}
catch(e) {
    console.log('Scenario 1 passed');
}


console.log("");
console.log("Tests for issue #1");


// issue #1: Deposit Money into an account

// Scenario 1: Put in a negative amount of money

try {
    bank.deposit(1234567890, -50);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}


// Scenario 2: Put in a positive amount of money to the cent

try {
    bank.deposit(1234567890, 50.45);

    if(bank.getBalance(1234567890) == 3498.45) {
        console.log('Scenario 2 passed');

    } else {    
        console.log('Scenario 2 failed');
    }
} catch(e) {
    console.log('Scenario 2 failed');
}

// Scenario 3: Put in fractional cents

try {
    bank.deposit(1234567890, 50.454);

    console.log("Scenario 3 failed");
} catch(e) {
    console.log('Scenario 3 passed');
}

