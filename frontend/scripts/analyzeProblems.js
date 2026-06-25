import { LANGUAGE_CONFIG, PROBLEMS } from "../src/data/problems.js";

const languages = Object.keys(LANGUAGE_CONFIG);
const issues = [];
const seenIds = new Set();

for (const [key, problem] of Object.entries(PROBLEMS)) {
  if (key !== problem.id) issues.push(`${key}: key does not match id "${problem.id}"`);
  if (seenIds.has(problem.id)) issues.push(`${key}: duplicate id "${problem.id}"`);
  seenIds.add(problem.id);

  if (!problem.title) issues.push(`${key}: missing title`);
  if (!["Easy", "Medium", "Hard"].includes(problem.difficulty)) {
    issues.push(`${key}: invalid difficulty "${problem.difficulty}"`);
  }
  if (!problem.category) issues.push(`${key}: missing category`);
  if (!problem.description?.text) issues.push(`${key}: missing description.text`);
  if (!Array.isArray(problem.description?.notes)) issues.push(`${key}: notes must be an array`);
  if (!Array.isArray(problem.examples) || problem.examples.length === 0) {
    issues.push(`${key}: at least one example is required`);
  }
  if (!Array.isArray(problem.constraints)) issues.push(`${key}: constraints must be an array`);

  for (const language of languages) {
    if (!problem.starterCode?.[language]?.trim()) {
      issues.push(`${key}: missing ${language} starter code`);
    }
  }

  const isValidExpectedOutput = (expectedOutput) =>
    typeof expectedOutput === "string" ||
    (Array.isArray(expectedOutput) && expectedOutput.every((output) => typeof output === "string"));

  const validExpectedOutput =
    isValidExpectedOutput(problem.expectedOutput) ||
    (problem.expectedOutput &&
      languages.every((language) => isValidExpectedOutput(problem.expectedOutput[language])));

  if (!validExpectedOutput) issues.push(`${key}: invalid expectedOutput`);
}

const report = {
  problems: Object.keys(PROBLEMS).length,
  languages,
  issues,
};

console.log(JSON.stringify(report, null, 2));
if (issues.length > 0) process.exitCode = 1;
