import { BankType, AccountType } from './types';

/**
 * Bank class implements the BankType interface
 * and stores accounts and usernames
 * and is able to create new accounts
 */

export class Bank implements BankType {

    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * 
     * @param accounts - a list of accounts to be stored in the bank
     * @param usernames - a list bank verified usernames
     * @returns a new Bank object
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * 
     * @param username - a string representing the username
     * @returns true if the username exists in the bank, false otherwise
     */
    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * 
     * @param accountNumber - a number representing the account number
     * @returns an AccountType object if the account exists, undefined otherwise
     */
    private findAccount(accountNumber: number): AccountType | undefined {
        return this.accounts.find(account => account.id === accountNumber);
    }

    /**
     * 
     * @param accountNumber - a number representing the account number
     * @returns true if the account number has 10 digits, false otherwise
     */
    private isAccountNumberValid(accountNumber: number): boolean {
        return accountNumber.toString().length === 10;
    }

    /**
     * 
     * @param accountNumber - a number representing the account number
     * @param amount - a number representing the amount to be deposited
     * @returns the new balance of the account
     */
    getBalance(accountNumber: number): number {
        const account = this.findAccount(accountNumber);
        if(!account) {
            throw new Error('Account not found');
        }
        return account.balance;
    }

    /**
     * 
     * @param accountNumber - a number representing the account number
     * @param amount - a number representing the amount to be deposited
     * @returns the new balance of the account
     */
    deposit(accountNumber: number, amount: number): number {
        
        if(amount < 0) {
            throw new Error('Amount must be positive');
        }

        if(!(amount.toFixed(2) === amount.toString()
            ||  amount.toFixed(1) === amount.toString()
            ||  amount.toFixed(0) === amount.toString())) {
            throw new Error('Amount must have 2 decimal places');
        }
        
        const account = this.findAccount(accountNumber);
        
        if(!account) {
            throw new Error('Account not found');
        }
        
        account.balance += amount;
        return account.balance;
    }

    /**
     * 
     * @param accountNumber - a number representing the account number
     * @param amount - a number representing the amount to be withdrawn
     * @returns the new balance of the account
     */
    withdraw(accountNumber: number, amount: number): number {
        if(amount < 0) {
            throw new Error('Amount must be positive');
        }

        if(!(amount.toFixed(2) === amount.toString()
            ||  amount.toFixed(1) === amount.toString()
            ||  amount.toFixed(0) === amount.toString())) {
            throw new Error('Amount must have 2 decimal places');
        }
        
        const account = this.findAccount(accountNumber);
        
        if(!account) {
            throw new Error('Account not found');
        }
        
        if(account.balance < amount) {
            throw new Error('Insufficient balance');
        }
        
        account.balance -= amount;
        return account.balance;
    }


    /**
     * 
     * @param username - a string representing the username of the customer
     * @param age - a number representing the age of the customer
     * @param accountNumber - a number representing the account number of the customer that needs to be created
     * @returns a new account of type AccountType
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if(!this.isUsernameExists(username)) {
            throw new Error('User no found');
        }
        if(!this.isAccountNumberValid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if(this.findAccount(accountNumber)) {
            throw new Error('Account already exists');
        }

        if(age < 18) {
            throw new Error('Age must be 18 or above');
        }
        
        const newAccount: AccountType = {
            id: accountNumber,
            balance: 0
        }

        this.accounts.push(newAccount);
        return newAccount;
    }
}