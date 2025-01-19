export 
class Account {

    private balance: number;
    private name: string;
    private accountNumber: number;

    constructor(name: string, accountNumber: number, initialBalance: number) {
        this.balance = initialBalance;
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }


}