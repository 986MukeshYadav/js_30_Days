class Account {
    #balance;
  
    constructor(balance = 0) {
      this.#balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log('Invalid withdrawal amount.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account1 = new Account();
  account1.deposit(100); // Output: Deposited: 100. New balance: 100
  account1.withdraw(50); // Output: Withdrew: 50. New balance: 50
  console.log(account1.getBalance()); // Output: 50
  