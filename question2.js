// Question 2: Processing Loan Applications (Interactive Version)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Question 2: Processing Loan Applications ===\n");

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function processLoans(scores) {
  console.log("\n📊 Processing loan applications...\n");
  console.log("Original credit scores:", scores);
  console.log();
  
  // 1. filter(): Eligible scores (> 700)
  const eligible = scores.filter(score => score > 700);
  console.log("✅ 1. Eligible applicants (score > 700):", eligible);
  console.log(`   Count: ${eligible.length} out of ${scores.length}`);
  console.log();
  
  // 2. map(): Adjust scores (+20 points)
  const adjustedScores = scores.map(score => score + 20);
  console.log("✅ 2. Adjusted scores (+20 points):", adjustedScores);
  console.log();
  
  // 3. reduce(): Total risk metric
  const totalRiskMetric = scores.reduce((sum, score) => sum + score, 0);
  const averageScore = (totalRiskMetric / scores.length).toFixed(2);
  console.log("✅ 3. Risk Metrics:");
  console.log(`   Total: ${totalRiskMetric}`);
  console.log(`   Average: ${averageScore}`);
  console.log();
  
  // 4. some(): Check for perfect score (900)
  const hasPerfectScore = scores.some(score => score === 900);
  console.log("✅ 4. Has perfect score (900)?", hasPerfectScore ? "Yes ⭐" : "No");
  console.log();
  
  // 5. every(): All meet minimum (400)
  const allMeetMinimum = scores.every(score => score >= 400);
  console.log("✅ 5. All meet minimum (400)?", allMeetMinimum ? "Yes ✓" : "No ✗");
  console.log();
  
  // 6. find(): First severe risk (< 500)
  const severeRiskScore = scores.find(score => score < 500);
  console.log("✅ 6. First severe risk score (< 500):", severeRiskScore || "None");
  console.log();
  
  // 7. findIndex(): Index of severe risk
  const severeRiskIndex = scores.findIndex(score => score < 500);
  if (severeRiskIndex !== -1) {
    console.log("✅ 7. Severe risk application position:", severeRiskIndex);
    console.log(`   ⚠️  Application file to reject: Position ${severeRiskIndex}`);
  } else {
    console.log("✅ 7. No severe risk applications found");
  }
  console.log();
  
  console.log("=== Summary ===");
  console.log(`📝 Total applicants: ${scores.length}`);
  console.log(`✅ Eligible: ${eligible.length}`);
  console.log(`❌ Rejected: ${scores.length - eligible.length}`);
  console.log(`📊 Average score: ${averageScore}`);
}

async function main() {
  console.log("Enter credit scores for loan applicants.");
  console.log("(Enter scores separated by commas, e.g., 650,800,500,720)\n");
  
  const input = await askQuestion("Enter credit scores: ");
  
  // Parse input
  const scores = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  
  if (scores.length === 0) {
    console.log("❌ No valid scores entered. Using default example...\n");
    processLoans([650, 800, 500, 720, 410, 900]);
  } else {
    processLoans(scores);
  }
  
  console.log();
  const again = await askQuestion("Process another batch? (yes/no): ");
  
  if (again.toLowerCase() === 'yes' || again.toLowerCase() === 'y') {
    await main();
  } else {
    console.log("\nThank you for using the Loan Processing System! 👋");
    rl.close();
  }
}

main();
