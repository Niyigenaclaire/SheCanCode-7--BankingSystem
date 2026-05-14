# IronClad Banking System - JavaScript Assignment

This project contains 5 interactive JavaScript files demonstrating array methods, loops, conditions, and basic programming concepts through a fictional banking system.

## Files

- **question1.js** - Smart ATM & Transaction History (Interactive with menu)
- **question2.js** - Processing Loan Applications (Interactive with user input)
- **question3.js** - Fraud Detection & Ledger Auditing (Interactive with user input)
- **question4.js** - Bank Mergers & Data Cleanup (Interactive with user input)
- **question5.js** - Security & Reporting System (Interactive with menu)

## How to Run

### Run individual questions with Node.js

```bash
node question1.js
node question2.js
node question3.js
node question4.js
node question5.js
```

### Or use npm scripts

```bash
npm run q1
npm run q2
npm run q3
npm run q4
npm run q5
```

## What Each File Does

### Question 1: Smart ATM & Transaction History
- **Interactive Menu** with options for:
  - Withdrawal
  - Deposit
  - Fee processing
  - Undo last transaction
  - Clear oldest transaction
  - View transaction history
- **Array Methods**: `push()`, `pop()`, `shift()`, `unshift()`
- **Concepts**: Balance management, transaction validation, history tracking

### Question 2: Processing Loan Applications
- **User Input**: Enter credit scores separated by commas
- **Array Methods**: `filter()`, `map()`, `reduce()`, `some()`, `every()`, `find()`, `findIndex()`
- **Concepts**: Credit score evaluation, batch processing, risk calculation
- **Features**: Eligibility filtering, score adjustment, risk metrics

### Question 3: Fraud Detection & Ledger Auditing
- **User Input**: Enter transaction IDs and fraud ID to check
- **Array Methods**: `includes()`, `indexOf()`, `slice()`, `splice()`, `forEach()`
- **Concepts**: Transaction auditing, fraud detection
- **Features**: Fraud ID checking, transaction removal, safe transaction clearing

### Question 4: Bank Mergers & Data Cleanup
- **User Input**: Enter customer names for branches and messy data
- **Array Methods**: `concat()`, `flat()`, `sort()`, `reverse()`, `join()`, `fill()`
- **Concepts**: Database merging, data formatting
- **Features**: Branch merging, data flattening, customer sorting, teller initialization

### Question 5: Security & Reporting System
- **Interactive Menu** with options for:
  - Password validation
  - Yearly report generation
- **String Methods & Logic**: `length`, `toLowerCase()`, `includes()`, loops, conditionals
- **Concepts**: Password validation, leap year calculation, anniversary tracking
- **Features**: Password security rules, yearly reports with milestones

## Requirements

- Node.js (version 12 or higher)

## Example Usage

### Question 1 (ATM):
```bash
node question1.js
```
Then follow the menu:
- Choose "2" for Deposit
- Enter "500" as amount
- Choose "1" for Withdrawal
- Enter "200" as amount
- Choose "6" to view history
- Choose "7" to exit

### Question 2 (Loan Processing):
```bash
node question2.js
```
Enter credit scores: `650,800,500,720,410,900`

### Question 3 (Fraud Detection):
```bash
node question3.js
```
Enter transaction IDs: `1042,8922,3301,5510,7719,9920`
Enter fraud ID: `5510`

### Question 4 (Bank Merger):
```bash
node question4.js
```
Enter Branch A customers: `Alice,Bob`
Enter Branch B customers: `Charlie,Diana`
Enter messy data: `Eve,Frank;Grace;Hank,Ivy`

### Question 5 (Security):
```bash
node question5.js
```
Choose option 1 or 2 from menu, then follow prompts

## Learning Objectives

This assignment teaches:
- JavaScript array manipulation methods
- Conditional logic and validation
- Loop structures
- String operations
- User input handling with readline
- Real-world application of programming concepts

## Author

Created for SheCanCode-7 Banking System Assignment
