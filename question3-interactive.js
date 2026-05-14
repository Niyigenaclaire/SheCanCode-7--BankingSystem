// Question 3: Fraud Detection & Ledger Auditing (Interactive Version)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Question 3: Fraud Detection & Ledger Auditing ===\n");

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function detectFraud(dailyTransactions, fraudID) {
  console.log("\n🔍 Running fraud detection...\n");
  console.log("Daily transactions:", dailyTransactions);
  console.log("Flagged fraud ID:", fraudID);
  console.log();
  
  // 1. includes(): Check if fraudID exists
  const isFraudPresent = dailyTransactions.includes(fraudID);
  console.log("✅ 1. Fraud ID present? (includes()):", isFraudPresent ? "Yes ⚠️" : "No ✓");
  console.log();
  
  // 2. indexOf(): Find position
  const fraudIndex = dailyTransactions.indexOf(fraudID);
  console.log("✅ 2. Fraud ID position (indexOf()):", fraudIndex !== -1 ? fraudIndex : "Not found");
  console.log();
  
  // 3. slice(): Get last 3 transactions
  const last3Transactions = dailyTransactions.slice(-3);
  console.log("✅ 3. Last 3 transactions (slice()):", last3Transactions);
  console.log("   Original array unchanged:", dailyTransactions);
  console.log();
  
  // 4. splice(): Remove fraud ID
  if (fraudIndex !== -1) {
    console.log("✅ 4. Removing fraud ID (splice())...");
    const removed = dailyTransactions.splice(fraudIndex, 1);
    console.log("   Removed:", removed);
    console.log("   Updated transactions:", dailyTransactions);
    console.log();
  } else {
    console.log("✅ 4. No fraud ID to remove");
    console.log();
  }
  
  // 5. forEach(): Clear remaining transactions
  console.log("✅ 5. Clearing safe transactions (forEach()):");
  dailyTransactions.forEach(id => {
    console.log(`   ✓ Transaction ${id} cleared.`);
  });
  console.log();
  
  console.log("=== Final Report ===");
  console.log(`Safe transactions: ${dailyTransactions.length}`);
  console.log(`Fraud detected: ${isFraudPresent ? 'Yes' : 'No'}`);
  console.log(`Fraud removed: ${fraudIndex !== -1 ? 'Yes' : 'N/A'}`);
}

async function main() {
  console.log("Enter daily transaction IDs and a fraud ID to check.\n");
  
  const transInput = await askQuestion("Enter transaction IDs (comma-separated, e.g., 1042,8922,3301): ");
  const fraudInput = await askQuestion("Enter fraud ID to check: ");
  
  // Parse input
  const transactions = transInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  const fraudID = parseInt(fraudInput.trim());
  
  if (transactions.length === 0 || isNaN(fraudID)) {
    console.log("❌ Invalid input. Using default example...");
    detectFraud([1042, 8922, 3301, 5510, 7719, 9920], 5510);
  } else {
    detectFraud(transactions, fraudID);
  }
  
  console.log();
  const again = await askQuestion("Check another set of transactions? (yes/no): ");
  
  if (again.toLowerCase() === 'yes' || again.toLowerCase() === 'y') {
    await main();
  } else {
    console.log("\nThank you for using the Fraud Detection System! 👋");
    rl.close();
  }
}

main();
