// Question 1: The Smart ATM & Transaction History (Interactive Version)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize ATM state
let balance = 1000;
let transactionHistory = [];

console.log("=== Question 1: Smart ATM & Transaction History ===\n");
console.log(`Initial balance: $${balance}\n`);

function atmTransaction(transactionType, amount) {
  // Handle Undo operation
  if (transactionType === "Undo") {
    if (transactionHistory.length === 0) {
      console.log("❌ No transactions to undo");
      return;
    }
    
    const lastTransaction = transactionHistory.pop();
    
    if (lastTransaction.includes("Withdrawal") || lastTransaction.includes("Fee")) {
      const amountStr = lastTransaction.split("$")[1];
      const revertAmount = parseFloat(amountStr);
      balance += revertAmount;
    } else if (lastTransaction.includes("Deposit")) {
      const amountStr = lastTransaction.split("$")[1];
      const revertAmount = parseFloat(amountStr);
      balance -= revertAmount;
    }
    
    console.log(`✅ Undo successful. Transaction removed: ${lastTransaction}`);
    console.log(`💰 Current balance: $${balance}`);
    return;
  }
  
  // Handle ClearOldest operation
  if (transactionType === "ClearOldest") {
    if (transactionHistory.length === 0) {
      console.log("❌ No transactions to clear");
      return;
    }
    
    const oldestTransaction = transactionHistory.shift();
    console.log(`✅ Oldest transaction cleared: ${oldestTransaction}`);
    console.log(`💰 Current balance: $${balance}`);
    return;
  }
  
  // Validation
  if (amount <= 0) {
    console.log("❌ Error: Amount must be positive");
    return;
  }
  
  // Handle Withdrawal
  if (transactionType === "Withdrawal") {
    if (amount > balance) {
      console.log("❌ Error: Insufficient funds");
      return;
    }
    
    balance -= amount;
    transactionHistory.push(`Withdrawal: $${amount}`);
    console.log(`✅ Withdrawal successful: $${amount}`);
  }
  
  // Handle Deposit
  else if (transactionType === "Deposit") {
    balance += amount;
    transactionHistory.push(`Deposit: $${amount}`);
    console.log(`✅ Deposit successful: $${amount}`);
  }
  
  // Handle Fee
  else if (transactionType === "Fee") {
    if (amount > balance) {
      console.log("❌ Error: Insufficient funds for fee");
      return;
    }
    
    balance -= amount;
    transactionHistory.unshift(`Maintenance Fee: $${amount}`);
    console.log(`✅ Fee processed: $${amount}`);
  }
  
  console.log(`💰 Current balance: $${balance}`);
}

function showMenu() {
  console.log("\n--- ATM Menu ---");
  console.log("1. Withdrawal");
  console.log("2. Deposit");
  console.log("3. Fee");
  console.log("4. Undo");
  console.log("5. Clear Oldest");
  console.log("6. View History");
  console.log("7. Exit");
  console.log("----------------");
}

function showHistory() {
  console.log("\n📜 Transaction History:");
  if (transactionHistory.length === 0) {
    console.log("  No transactions yet");
  } else {
    transactionHistory.forEach((transaction, index) => {
      console.log(`  ${index + 1}. ${transaction}`);
    });
  }
  console.log(`💰 Current balance: $${balance}\n`);
}

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  while (true) {
    showMenu();
    const choice = await askQuestion("Enter your choice (1-7): ");
    
    console.log();
    
    if (choice === "7") {
      console.log("Thank you for using IronClad ATM! 👋");
      showHistory();
      rl.close();
      break;
    }
    
    switch (choice) {
      case "1": // Withdrawal
        const withdrawAmount = parseFloat(await askQuestion("Enter withdrawal amount: $"));
        atmTransaction("Withdrawal", withdrawAmount);
        break;
        
      case "2": // Deposit
        const depositAmount = parseFloat(await askQuestion("Enter deposit amount: $"));
        atmTransaction("Deposit", depositAmount);
        break;
        
      case "3": // Fee
        const feeAmount = parseFloat(await askQuestion("Enter fee amount: $"));
        atmTransaction("Fee", feeAmount);
        break;
        
      case "4": // Undo
        atmTransaction("Undo");
        break;
        
      case "5": // Clear Oldest
        atmTransaction("ClearOldest");
        break;
        
      case "6": // View History
        showHistory();
        break;
        
      default:
        console.log("❌ Invalid choice. Please enter 1-7.");
    }
  }
}

main();
