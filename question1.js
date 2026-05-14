// Question 1: The Smart ATM & Transaction History (Basic Math & Array Mutation)

// Initialize ATM state
let balance = 1000;
let transactionHistory = [];

/**
 * Process ATM transactions with validation and history management
 * @param {string} transactionType - Type of transaction: "Withdrawal", "Deposit", "Undo", "Fee", "ClearOldest"
 * @param {number} amount - Transaction amount (not needed for Undo or ClearOldest)
 */
function atmTransaction(transactionType, amount) {
  // Handle Undo operation
  if (transactionType === "Undo") {
    if (transactionHistory.length === 0) {
      console.log("No transactions to undo");
      return;
    }
    
    // Remove last transaction using pop()
    const lastTransaction = transactionHistory.pop();
    
    // Revert the balance
    if (lastTransaction.includes("Withdrawal") || lastTransaction.includes("Fee")) {
      // Extract amount from string (e.g., "Withdrawal: $50" -> 50)
      const amountStr = lastTransaction.split("$")[1];
      const revertAmount = parseFloat(amountStr);
      balance += revertAmount;
    } else if (lastTransaction.includes("Deposit")) {
      const amountStr = lastTransaction.split("$")[1];
      const revertAmount = parseFloat(amountStr);
      balance -= revertAmount;
    }
    
    console.log(`Undo successful. Transaction removed: ${lastTransaction}`);
    console.log(`Current balance: $${balance}`);
    return;
  }
  
  // Handle ClearOldest operation
  if (transactionType === "ClearOldest") {
    if (transactionHistory.length === 0) {
      console.log("No transactions to clear");
      return;
    }
    
    // Remove first transaction using shift()
    const oldestTransaction = transactionHistory.shift();
    console.log(`Oldest transaction cleared: ${oldestTransaction}`);
    console.log(`Current balance: $${balance}`);
    return;
  }
  
  // Validation: Check if amount is positive
  if (amount <= 0) {
    console.log("Error: Amount must be positive");
    return;
  }
  
  // Handle Withdrawal
  if (transactionType === "Withdrawal") {
    // Check if sufficient balance
    if (amount > balance) {
      console.log("Error: Insufficient funds");
      return;
    }
    
    balance -= amount;
    // Add to history using push()
    transactionHistory.push(`Withdrawal: $${amount}`);
    console.log(`Withdrawal successful: $${amount}`);
  }
  
  // Handle Deposit
  else if (transactionType === "Deposit") {
    balance += amount;
    // Add to history using push()
    transactionHistory.push(`Deposit: $${amount}`);
    console.log(`Deposit successful: $${amount}`);
  }
  
  // Handle Fee
  else if (transactionType === "Fee") {
    if (amount > balance) {
      console.log("Error: Insufficient funds for fee");
      return;
    }
    
    balance -= amount;
    // Add to beginning of history using unshift()
    transactionHistory.unshift(`Maintenance Fee: $${amount}`);
    console.log(`Fee processed: $${amount}`);
  }
  
  console.log(`Current balance: $${balance}`);
}

// Demo: Test the ATM system
console.log("=== Question 1: Smart ATM & Transaction History ===\n");

console.log("Initial balance: $" + balance);
console.log();

// Test deposits and withdrawals
atmTransaction("Deposit", 500);
console.log();

atmTransaction("Withdrawal", 200);
console.log();

atmTransaction("Deposit", 100);
console.log();

// Test validation
atmTransaction("Withdrawal", 2000); // Should fail - insufficient funds
console.log();

atmTransaction("Withdrawal", -50); // Should fail - negative amount
console.log();

// Test Fee (uses unshift)
atmTransaction("Fee", 10);
console.log();

// Test Undo (uses pop)
console.log("--- Testing Undo ---");
atmTransaction("Undo");
console.log();

// Test ClearOldest (uses shift)
console.log("--- Testing Clear Oldest ---");
atmTransaction("ClearOldest");
console.log();

// Display final state
console.log("=== Final State ===");
console.log("Final balance: $" + balance);
console.log("Transaction history:");
transactionHistory.forEach((transaction, index) => {
  console.log(`  ${index + 1}. ${transaction}`);
});
