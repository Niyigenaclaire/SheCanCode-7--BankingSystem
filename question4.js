// Question 4: Bank Mergers & Data Cleanup (Interactive Version)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Question 4: Bank Mergers & Data Cleanup ===\n");

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function processMerger(branchA, branchB, messyData) {
  console.log("\n🏦 Processing bank merger...\n");
  
  // 1. concat(): Merge branches
  const allCustomers = branchA.concat(branchB);
  console.log("✅ 1. Merged customers (concat()):");
  console.log("   Branch A:", branchA);
  console.log("   Branch B:", branchB);
  console.log("   All customers:", allCustomers);
  console.log();
  
  // 2. flat(): Flatten messy data
  const flattenedData = messyData.flat();
  console.log("✅ 2. Flattened data (flat()):");
  console.log("   Messy data:", messyData);
  console.log("   Flattened:", flattenedData);
  console.log();
  
  // 3. sort() & reverse(): Sort A-Z then Z-A
  const sortedAZ = flattenedData.slice().sort();
  const sortedZA = sortedAZ.slice().reverse();
  console.log("✅ 3. Sorted and reversed (sort() & reverse()):");
  console.log("   A-Z:", sortedAZ);
  console.log("   Z-A:", sortedZA);
  console.log();
  
  // 4. join(): Welcome banner
  const welcomeBanner = allCustomers.join(" - ");
  console.log("✅ 4. Welcome banner (join()):");
  console.log("   " + welcomeBanner);
  console.log();
  
  // 5. fill(): Teller windows
  const numWindows = 5;
  const tellerWindows = new Array(numWindows).fill("Closed");
  console.log("✅ 5. Teller windows (fill()):");
  console.log("   Status:", tellerWindows);
  console.log();
  
  console.log("=== Summary ===");
  console.log(`Total customers: ${allCustomers.length + flattenedData.length}`);
  console.log(`Teller windows: ${tellerWindows.length}`);
}

async function main() {
  console.log("Enter customer data for bank merger.\n");
  
  const branchAInput = await askQuestion("Enter Branch A customers (comma-separated, e.g., Alice,Bob): ");
  const branchBInput = await askQuestion("Enter Branch B customers (comma-separated, e.g., Charlie,Diana): ");
  const messyInput = await askQuestion("Enter messy data (use semicolons for groups, e.g., Eve,Frank;Grace;Hank,Ivy): ");
  
  // Parse input
  const branchA = branchAInput.split(',').map(s => s.trim()).filter(s => s.length > 0);
  const branchB = branchBInput.split(',').map(s => s.trim()).filter(s => s.length > 0);
  const messyData = messyInput.split(';').map(group => 
    group.split(',').map(s => s.trim()).filter(s => s.length > 0)
  );
  
  if (branchA.length === 0 || branchB.length === 0) {
    console.log("❌ Invalid input. Using default example...");
    processMerger(
      ["Alice", "Bob"],
      ["Charlie", "Diana"],
      [["Eve", "Frank"], ["Grace"], ["Hank", "Ivy"]]
    );
  } else {
    processMerger(branchA, branchB, messyData);
  }
  
  console.log();
  const again = await askQuestion("Process another merger? (yes/no): ");
  
  if (again.toLowerCase() === 'yes' || again.toLowerCase() === 'y') {
    await main();
  } else {
    console.log("\nThank you for using the Bank Merger System! 👋");
    rl.close();
  }
}

main();
