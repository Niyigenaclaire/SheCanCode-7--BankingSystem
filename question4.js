// Question 4: Bank Mergers & Data Cleanup (Formatting & Structuring Methods)

console.log("=== Question 4: Bank Mergers & Data Cleanup ===\n");

// 1. concat(): Merge two branch databases
const branchA = ["Alice", "Bob"];
const branchB = ["Charlie", "Diana"];

const allCustomers = branchA.concat(branchB);
console.log("1. Merged customers (using concat()):");
console.log("   Branch A:", branchA);
console.log("   Branch B:", branchB);
console.log("   All customers:", allCustomers);
console.log();

// 2. flat(): Flatten nested customer data
const messyData = [["Eve", "Frank"], ["Grace"], ["Hank", "Ivy"]];
const flattenedData = messyData.flat();
console.log("2. Flattened data (using flat()):");
console.log("   Messy data:", messyData);
console.log("   Flattened:", flattenedData);
console.log();

// 3. sort() & reverse(): Sort alphabetically then reverse to Z-A
const sortedAZ = flattenedData.slice().sort(); // Use slice() to avoid mutating original
const sortedZA = sortedAZ.slice().reverse();
console.log("3. Sorted and reversed (using sort() and reverse()):");
console.log("   Original flattened:", flattenedData);
console.log("   Sorted A-Z:", sortedAZ);
console.log("   Sorted Z-A:", sortedZA);
console.log();

// 4. join(): Create welcome banner string
const welcomeBanner = allCustomers.join(" - ");
console.log("4. Welcome banner (using join()):");
console.log("   " + welcomeBanner);
console.log();

// 5. fill(): Initialize teller windows
const tellerWindows = new Array(5).fill("Closed");
console.log("5. Teller windows (using fill()):");
console.log("   Status:", tellerWindows);
console.log();

// Additional demonstration: Update some teller windows
tellerWindows[0] = "Open";
tellerWindows[2] = "Open";
console.log("   After opening some windows:", tellerWindows);
console.log();

console.log("=== Summary ===");
console.log(`Total customers from all branches: ${allCustomers.length + flattenedData.length}`);
console.log(`Teller windows: ${tellerWindows.length}`);
console.log(`Open windows: ${tellerWindows.filter(status => status === "Open").length}`);
