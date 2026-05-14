# How to Run the IronClad Banking System

## 🎯 Two Versions Available

### 1. **Demo Versions** (Automatic - No Input Needed)
These run automatically with pre-defined test data to show you how everything works.

### 2. **Interactive Versions** (User Input Required)
These ask you to enter data and make choices - perfect for testing your own scenarios!

---

## 🚀 Quick Start

### Run Demo Versions (Automatic):

```bash
# Question 1: ATM System
node question1.js

# Question 2: Loan Processing
node question2.js

# Question 3: Fraud Detection
node question3.js

# Question 4: Bank Mergers
node question4.js

# Question 5: Security System
node question5.js

# Run ALL demos at once:
node run-all.js
```

### Run Interactive Versions (With User Input):

```bash
# Question 1: Interactive ATM
node question1-interactive.js

# Question 2: Interactive Loan Processing
node question2-interactive.js

# Question 3: Interactive Fraud Detection
node question3-interactive.js

# Question 4: Interactive Bank Merger
node question4-interactive.js

# Question 5: Interactive Security System
node question5-interactive.js
```

---

## 📝 What Each Interactive Version Does

### Question 1 Interactive (ATM):
- Shows a menu with options
- You can:
  - Make withdrawals
  - Make deposits
  - Process fees
  - Undo transactions
  - Clear oldest transaction
  - View transaction history
  - Exit

**Example:**
```
--- ATM Menu ---
1. Withdrawal
2. Deposit
3. Fee
4. Undo
5. Clear Oldest
6. View History
7. Exit
----------------
Enter your choice (1-7): 2
Enter deposit amount: $500
✅ Deposit successful: $500
💰 Current balance: $1500
```

### Question 2 Interactive (Loan Processing):
- Enter credit scores separated by commas
- System processes and shows:
  - Eligible applicants (score > 700)
  - Adjusted scores (+20 points)
  - Risk metrics
  - Perfect scores
  - Severe risks

**Example:**
```
Enter credit scores: 650,800,500,720,410,900
```

### Question 3 Interactive (Fraud Detection):
- Enter transaction IDs
- Enter a fraud ID to check
- System shows:
  - If fraud exists
  - Position of fraud
  - Last 3 transactions
  - Removes fraud
  - Clears safe transactions

**Example:**
```
Enter transaction IDs: 1042,8922,3301,5510,7719,9920
Enter fraud ID to check: 5510
```

### Question 4 Interactive (Bank Merger):
- Enter customer names for Branch A
- Enter customer names for Branch B
- Enter messy nested data
- System shows:
  - Merged customers
  - Flattened data
  - Sorted data
  - Welcome banner
  - Teller windows

**Example:**
```
Enter Branch A customers: Alice,Bob
Enter Branch B customers: Charlie,Diana
Enter messy data: Eve,Frank;Grace;Hank,Ivy
```

### Question 5 Interactive (Security System):
- Menu with 2 options:
  1. **Validate Password**: Enter a password to check if it meets requirements
  2. **Generate Yearly Report**: Enter start and end years for report

**Example:**
```
--- Security System Menu ---
1. Validate Password
2. Generate Yearly Report
3. Exit
---------------------------
Enter your choice: 1
Enter password to validate: MySecure123
```

---

## 💡 Tips

1. **For Testing/Grading**: Use the demo versions (question1.js, question2.js, etc.)
2. **For Learning/Playing**: Use the interactive versions (question1-interactive.js, etc.)
3. **To See Everything**: Run `node run-all.js` to see all demos at once
4. **Invalid Input**: Interactive versions will use default examples if you enter invalid data

---

## ✅ Requirements

- **Node.js** installed (version 12 or higher)
- That's it! No other dependencies needed.

---

## 🆘 Troubleshooting

**Problem**: "node is not recognized"
**Solution**: Install Node.js from https://nodejs.org/

**Problem**: Interactive version not accepting input
**Solution**: Make sure you're running in a terminal/command prompt, not in a browser

**Problem**: Want to stop an interactive program
**Solution**: Press `Ctrl + C` to exit

---

## 📚 What You'll Learn

- **Array Mutation Methods**: push, pop, shift, unshift
- **Array Iteration Methods**: filter, map, reduce, some, every, find, findIndex
- **Array Accessor Methods**: includes, indexOf, slice, splice, forEach
- **Array Formatting Methods**: concat, flat, sort, reverse, join, fill
- **String Methods**: length, toLowerCase, includes
- **Conditionals & Loops**: if/else, for loops
- **User Input**: readline module for interactive programs

---

## 🎓 Assignment Structure

Each question demonstrates specific JavaScript concepts:

1. **Question 1**: Array mutation + balance management
2. **Question 2**: Array iteration + data processing
3. **Question 3**: Array search + fraud detection
4. **Question 4**: Array formatting + data cleanup
5. **Question 5**: String validation + logic + loops

---

**Happy Coding! 🚀**
