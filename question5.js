// Question 5: The Security & Reporting System (Strings & Logic)

console.log("=== Question 5: Security & Reporting System ===\n");

// Part A: Password Validation
/**
 * Validate bank password against security rules
 * @param {string} password - Password to validate
 * @returns {string} "Access Granted" or "Access Denied"
 */
function validateBankPassword(password) {
  // Rule 1: At least 8 characters long
  if (password.length < 8) {
    return "Access Denied";
  }
  
  // Rule 2: Must not contain "password" (case insensitive)
  if (password.toLowerCase().includes("password")) {
    return "Access Denied";
  }
  
  // Rule 3: Must contain at least one vowel (a, e, i, o, u)
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const hasVowel = vowels.some(vowel => password.toLowerCase().includes(vowel));
  
  if (!hasVowel) {
    return "Access Denied";
  }
  
  return "Access Granted";
}

// Part B: Yearly Report Generation
/**
 * Generate yearly report with leap year detection and anniversary tracking
 * @param {number} startYear - Starting year
 * @param {number} endYear - Ending year
 */
function generateYearlyReport(startYear, endYear) {
  console.log(`\nGenerating report from ${startYear} to ${endYear}:\n`);
  
  for (let year = startYear; year <= endYear; year++) {
    // Check if leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    if (isLeapYear) {
      console.log(`Year ${year} is a special audit year.`);
    }
    
    // FizzBuzz Bonus: Check for anniversaries
    // Check for decade anniversary first (divisible by 10)
    if (year % 10 === 0) {
      console.log(`${year} - Decade Anniversary`);
    }
    // Then check for 5-year anniversary (divisible by 5 but not by 10)
    else if (year % 5 === 0) {
      console.log(`${year} - 5 Year Anniversary`);
    }
  }
}

// Demo Part A: Test password validation
console.log("--- Part A: Password Validation ---\n");

const testPasswords = [
  "MySecure1",      // Valid: 9 chars, no "password", has vowels
  "short",          // Invalid: too short
  "password123",    // Invalid: contains "password"
  "MyPassword1",    // Invalid: contains "password" (case insensitive)
  "Str0ngPwd",      // Valid: 9 chars, no "password", has vowel 'o'
  "12345678",       // Invalid: no vowels
  "SecureBank2024"  // Valid: long enough, no "password", has vowels
];

testPasswords.forEach(pwd => {
  const result = validateBankPassword(pwd);
  console.log(`Password: "${pwd}" -> ${result}`);
});

// Demo Part B: Test yearly report generation
console.log("\n--- Part B: Yearly Report Generation ---");

generateYearlyReport(2020, 2030);

console.log("\n=== Additional Test: Leap Year Examples ===");
console.log("Testing specific leap years:");

const testYears = [2000, 1900, 2024, 2100];
testYears.forEach(year => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  console.log(`${year}: ${isLeap ? 'Leap Year' : 'Not a Leap Year'}`);
});
