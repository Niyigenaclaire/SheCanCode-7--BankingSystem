// Question 3: The Fraud Detection & Ledger Auditing (Accessor & Search Methods)

const dailyTransactions = [1042, 8922, 3301, 5510, 7719, 9920];
const fraudID = 5510;

console.log("=== Question 3: Fraud Detection & Ledger Auditing ===\n");

console.log("Daily transactions:", dailyTransactions);
console.log("Flagged fraud ID:", fraudID);
console.log();

// 1. includes(): Check if fraudID is in dailyTransactions
const isFraudPresent = dailyTransactions.includes(fraudID);
console.log("1. Does fraud ID exist? (using includes()):", isFraudPresent);
console.log();

// 2. indexOf(): Find the exact index of fraudID
const fraudIndex = dailyTransactions.indexOf(fraudID);
console.log("2. Index of fraud ID (using indexOf()):", fraudIndex);
console.log();

// 3. slice(): Get last 3 transactions (does not alter original)
const last3Transactions = dailyTransactions.slice(-3);
console.log("3. Last 3 transactions (using slice()):", last3Transactions);
console.log("   Original array unchanged:", dailyTransactions);
console.log();

// 4. splice(): Remove the fraudID from the array (permanently alters it)
if (fraudIndex !== -1) {
  console.log("4. Removing fraud ID using splice()...");
  const removed = dailyTransactions.splice(fraudIndex, 1);
  console.log("   Removed:", removed);
  console.log("   Updated transactions:", dailyTransactions);
  console.log();
}

// 5. forEach(): Log message for each remaining safe transaction
console.log("5. Clearing remaining transactions (using forEach()):");
dailyTransactions.forEach(id => {
  console.log(`   Transaction ${id} cleared.`);
});
console.log();

console.log("=== Final State ===");
console.log("Safe transactions remaining:", dailyTransactions);
console.log("Total safe transactions:", dailyTransactions.length);
