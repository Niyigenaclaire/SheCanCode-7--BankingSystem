// Question 2: Processing Loan Applications (Iterating Methods)

/**
 * Process loan applications using array iteration methods
 * @param {number[]} scores - Array of credit scores
 * @returns {object} Object containing all processing results
 */
function processLoans(scores) {
  console.log("Original credit scores:", scores);
  console.log();
  
  // 1. filter(): Create array of eligible scores (> 700)
  const eligible = scores.filter(score => score > 700);
  console.log("1. Eligible scores (> 700) using filter():", eligible);
  console.log();
  
  // 2. map(): Add 20 points to every score
  const adjustedScores = scores.map(score => score + 20);
  console.log("2. Adjusted scores (+20 points) using map():", adjustedScores);
  console.log();
  
  // 3. reduce(): Calculate total sum of original scores
  const totalRiskMetric = scores.reduce((sum, score) => sum + score, 0);
  console.log("3. Total risk metric (sum) using reduce():", totalRiskMetric);
  console.log();
  
  // 4. some(): Check if at least one applicant has perfect score (900)
  const hasPerfectScore = scores.some(score => score === 900);
  console.log("4. Has perfect score (900) using some():", hasPerfectScore);
  console.log();
  
  // 5. every(): Check if every applicant meets minimum requirement (400)
  const allMeetMinimum = scores.every(score => score >= 400);
  console.log("5. All meet minimum (400) using every():", allMeetMinimum);
  console.log();
  
  // 6. find(): Find first score below 500 (severe risk)
  const severeRiskScore = scores.find(score => score < 500);
  console.log("6. First severe risk score (< 500) using find():", severeRiskScore);
  console.log();
  
  // 7. findIndex(): Find index of first score below 500
  const severeRiskIndex = scores.findIndex(score => score < 500);
  console.log("7. Index of first severe risk using findIndex():", severeRiskIndex);
  if (severeRiskIndex !== -1) {
    console.log(`   Application file to reject: Position ${severeRiskIndex}`);
  }
  console.log();
  
  return {
    eligible,
    adjustedScores,
    totalRiskMetric,
    hasPerfectScore,
    allMeetMinimum,
    severeRiskScore,
    severeRiskIndex
  };
}

// Demo: Test the loan processing system
console.log("=== Question 2: Processing Loan Applications ===\n");

const scores = [650, 800, 500, 720, 410, 900];
const results = processLoans(scores);

console.log("=== Summary ===");
console.log(`Total applicants: ${scores.length}`);
console.log(`Eligible applicants: ${results.eligible.length}`);
console.log(`Average original score: ${(results.totalRiskMetric / scores.length).toFixed(2)}`);
console.log(`Has perfect score: ${results.hasPerfectScore ? 'Yes' : 'No'}`);
console.log(`All meet minimum: ${results.allMeetMinimum ? 'Yes' : 'No'}`);
