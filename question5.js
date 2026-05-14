// Question 5: Security & Reporting System (Interactive Version)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Question 5: Security & Reporting System ===\n");

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Part A: Password Validation
function validateBankPassword(password) {
  const errors = [];
  
  // Rule 1: At least 8 characters
  if (password.length < 8) {
    errors.push("❌ Password must be at least 8 characters long");
  } else {
    console.log("✓ Length requirement met (8+ characters)");
  }
  
  // Rule 2: Must not contain "password"
  if (password.toLowerCase().includes("password")) {
    errors.push("❌ Password cannot contain the word 'password'");
  } else {
    console.log("✓ Does not contain forbidden word 'password'");
  }
  
  // Rule 3: Must contain at least one vowel
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const hasVowel = vowels.some(vowel => password.toLowerCase().includes(vowel));
  
  if (!hasVowel) {
    errors.push("❌ Password must contain at least one vowel (a, e, i, o, u)");
  } else {
    console.log("✓ Contains at least one vowel");
  }
  
  console.log();
  
  if (errors.length > 0) {
    console.log("Validation errors:");
    errors.forEach(error => console.log("  " + error));
    return "Access Denied";
  }
  
  return "Access Granted";
}

// Part B: Yearly Report Generation
function generateYearlyReport(startYear, endYear) {
  console.log(`\n📅 Generating report from ${startYear} to ${endYear}:\n`);
  
  for (let year = startYear; year <= endYear; year++) {
    // Check if leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    if (isLeapYear) {
      console.log(`🗓️  Year ${year} is a special audit year.`);
    }
    
    // Check for decade anniversary (divisible by 10)
    if (year % 10 === 0) {
      console.log(`🎉 ${year} - Decade Anniversary`);
    }
    // Check for 5-year anniversary (divisible by 5 but not 10)
    else if (year % 5 === 0) {
      console.log(`🎊 ${year} - 5 Year Anniversary`);
    }
  }
}

async function mainMenu() {
  console.log("\n--- Security System Menu ---");
  console.log("1. Validate Password");
  console.log("2. Generate Yearly Report");
  console.log("3. Exit");
  console.log("---------------------------");
  
  const choice = await askQuestion("Enter your choice (1-3): ");
  console.log();
  
  switch (choice) {
    case "1":
      await passwordValidation();
      await mainMenu();
      break;
      
    case "2":
      await yearlyReport();
      await mainMenu();
      break;
      
    case "3":
      console.log("Thank you for using the Security System! 👋");
      rl.close();
      break;
      
    default:
      console.log("❌ Invalid choice. Please enter 1-3.");
      await mainMenu();
  }
}

async function passwordValidation() {
  console.log("--- Part A: Password Validation ---\n");
  console.log("Password Requirements:");
  console.log("  • At least 8 characters long");
  console.log("  • Must not contain 'password'");
  console.log("  • Must contain at least one vowel (a, e, i, o, u)\n");
  
  const password = await askQuestion("Enter password to validate: ");
  console.log();
  
  const result = validateBankPassword(password);
  console.log(`\n🔐 Result: ${result}`);
  
  if (result === "Access Granted") {
    console.log("✅ Password is valid!");
  } else {
    console.log("❌ Password is invalid. Please try again.");
  }
}

async function yearlyReport() {
  console.log("--- Part B: Yearly Report Generation ---\n");
  
  const startYear = parseInt(await askQuestion("Enter start year: "));
  const endYear = parseInt(await askQuestion("Enter end year: "));
  
  if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
    console.log("❌ Invalid year range. Please try again.");
    return;
  }
  
  generateYearlyReport(startYear, endYear);
}

// Start the program
console.log("Welcome to the IronClad Security & Reporting System!\n");
mainMenu();
