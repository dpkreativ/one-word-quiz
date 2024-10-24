/**
 * Create a one-word quiz game
 * - use only prompt, alert. no DOM manipulation
 */

const content = [
  { question: "Gombe's capital", answer: "gombe", score: 6 },
  {
    question: "The meal you eat between breakfast and lunchtime",
    answer: "brunch",
    score: 2,
  },
  {
    question: "A frontend language adds interactivity to a web page?",
    answer: "javascript",
    score: 3,
  },
  {
    question: "The fastest non-flight bird in the world",
    answer: "ostrich",
    score: 4,
  },
  {
    question: "A global network of computers",
    answer: "internet",
    score: 3,
  },
];

let totalScore = 0;

for (let i = 0; i < content.length; i++) {
  let userInput = prompt(content[i].question);

  if (userInput.toLowerCase() === content[i].answer) {
    alert(`Correct! Your score is ${totalScore + content[i].score}`);
    totalScore = totalScore + content[i].score;
  }
}
