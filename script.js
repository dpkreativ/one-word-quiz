/**
 * Create a one-word quiz game
 * - use only prompt, alert. no DOM manipulation
 */

const content = [
  {
    question: "The meal you eat between breakfast and lunchtime",
    answer: "brunch",
    score: 2,
  },
  {
    question: "A frontend language that adds interactivity to a web page",
    answer: "javascript",
    score: 3,
  },
  { question: "Gombe's capital", answer: "gombe", score: 6 },
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
  {
    question: "The greatest white MC to hold a mic",
    answer: "eminem",
    score: 8,
  },
  {
    question: "The C in CSS stands for",
    answer: "cascading",
    score: 5,
  },
  {
    question: "Ouuwwweee... chocolate and...",
    answer: "caramel",
    score: 2,
  },
  {
    question: "I shoot lasers, cry when hurt, and drink only milk. Who am I?",
    answer: "homelander",
    score: 5,
  },
  {
    question: "My girlfriend's name",
    answer: "ariana",
    score: 10,
  },
];

let totalScore = 0;

alert(
  "Hey, check out this fun one-word trivia!\n\nThe rules are simple. For each question, fill in ONE WORD that correctly answers it. The scores vary so it's more fun, but the highest anyone can get is 48.\n\nWhat will you get? Let's find out!\n\nClick the 'OK' button below to start..."
);

for (let i = 0; i < content.length; i++) {
  let userInput = prompt(content[i].question);

  if (userInput.toLowerCase() === content[i].answer) {
    alert(`Correct! Your score is ${totalScore + content[i].score}`);
    totalScore = totalScore + content[i].score;
  } else {
    alert(
      `Nope! The correct answer is ${content[i].answer}. Your score  is ${totalScore}`
    );
  }
}

alert(
  `Thanks for playing! Your final score is ${totalScore}/48. You did great! Refresh this page if you want to try again.`
);
