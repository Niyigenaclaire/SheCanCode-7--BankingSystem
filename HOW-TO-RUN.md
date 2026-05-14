# How to Run the IronClad Banking System

## 🚀 Quick Start

All files are **interactive** and require user input.

### Run Any Question:

```bash
node question1.js
node question2.js
node question3.js
node question4.js
node question5.js
```

---

## 📝 What Each Question Does

### Question 1: Interactive ATM System
**Run:** `node question1.js`

Shows a menu with options:
```
--- ATM Menu ---
1. Withdrawal
2. Deposit
3. Fee
4. Undo
5. Clear Oldest
6. View History
7. Exit
```

**Example interaction:**
- Choose "2" for Deposit → Enter "500"
- Choose "1" for Withdrawal → Enter "200"
- Choose "6" to view history
- Choose "7" to exit

**Array Methods Used:** push, pop, shift, unshift

---

### Question 2: Loan Processing
**Run:** `node question2.js`

**Prompts:**
- Enter credit scores (comma-separated)

**Example input:** `650,800,500,720,410,900`

**Shows:**
- Eligible applicants (score > 700)
- Adjusted scores (+20 points)
- Risk metrics (total, average)
- Perfect score detection
- Severe risk identification

**Array Methods Used:** filter, map, reduce, some, every, find, findIndex

---

### Question 3: Fraud Detection
**Run:** `node question3.js`

**Prompts:**
- Enter transaction IDs (comma-separated)
- Enter fraud ID to check

**Example input:**
- Transaction IDs: `1042,8922,3301,5510,7719,9920`
- Fraud ID: `5510`

**Shows:**
- Fraud presence check
- Fraud position
- Last 3 transactions
- Fraud removal
- Safe transaction clearing

**Array Methods Used:** includes, indexOf, slice, splice, forEach

---

### Question 4: Bank Merger
**Run:** `node question4.js`

**Prompts:**
- Enter Branch A customers (comma-separated)
- Enter Branch B customers (comma-separated)
- Enter messy data (use semicolons for groups)

**Example input:**
- Branch A: `Alice,Bob`
- Branch B: `Charlie,Diana`
- Messy data: `Eve,Frank;Grace;Hank,Ivy`

**Shows:**
- Merged customers
- Flattened data
- Sorted data (A-Z and Z-A)
- Welcome banner
- Teller windows initialization

**Array Methods Used:** concat, flat, sort, reverse, join, fill

---

### Question 5: Security System
**Run:** `node question5.js`

Shows a menu:
```
--- Security System Menu ---
1. Validate Password
2. Generate Yearly Report
3. Exit
```

**Option 1 - Password Validation:**
- Enter a password to check
- Requirements:
  - At least 8 characters
  - No "password" substring
  - Must contain a vowel

**Option 2 - Yearly Report:**
- Enter start year
- Enter end year
- Shows leap years and anniversaries

**Methods Used:** String methods, conditionals, loops

---

## ✅ Requirements

- **Node.js** (version 12 or higher)
- No other dependencies needed!

---

## 💡 Tips

1. **Invalid Input**: If you enter invalid data, the program will use default examples
2. **Exit Programs**: Press `Ctrl + C` to force exit any program
3. **Repeat**: Most programs ask if you want to run again after completion

---

## 🆘 Troubleshooting

**Problem:** "node is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

**Problem:** Program not accepting input
**Solution:** Make sure you're running in terminal/command prompt

**Problem:** Want to stop a program
**Solution:** Press `Ctrl + C`

---

## 🎓 What You'll Learn

- **Array Mutation**: push, pop, shift, unshift
- **Array Iteration**: filter, map, reduce, some, every, find, findIndex
- **Array Accessor**: includes, indexOf, slice, splice, forEach
- **Array Formatting**: concat, flat, sort, reverse, join, fill
- **String Methods**: length, toLowerCase, includes
- **User Input**: readline module
- **Conditionals & Loops**: if/else, for loops

---

**Happy Coding! 🚀**
