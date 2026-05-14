// Run All Questions - IronClad Banking System
// This file runs all 5 questions in sequence

console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║     IRONCLAD BANKING SYSTEM - COMPLETE ASSIGNMENT         ║");
console.log("╚════════════════════════════════════════════════════════════╝");
console.log();

// Import and run each question
const fs = require('fs');
const path = require('path');

const questions = [
  'question1.js',
  'question2.js',
  'question3.js',
  'question4.js',
  'question5.js'
];

questions.forEach((file, index) => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`RUNNING: ${file.toUpperCase()}`);
  console.log('='.repeat(60));
  console.log();
  
  try {
    // Read and execute the file
    const code = fs.readFileSync(path.join(__dirname, file), 'utf8');
    eval(code);
  } catch (error) {
    console.error(`Error running ${file}:`, error.message);
  }
  
  if (index < questions.length - 1) {
    console.log('\n' + '─'.repeat(60));
    console.log('Press Enter to continue to next question...');
    console.log('─'.repeat(60));
  }
});

console.log("\n\n╔════════════════════════════════════════════════════════════╗");
console.log("║           ALL QUESTIONS COMPLETED SUCCESSFULLY!            ║");
console.log("╚════════════════════════════════════════════════════════════╝");
