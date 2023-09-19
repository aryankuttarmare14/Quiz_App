// Define quiz questions and correct answers for the 10th-grade quiz
const quiz = [
    {
        question: "Q1: What is the capital of France?",
        a: "Madrid",
        b: "Rome",
        c: "Berlin",
        d: "Paris",
        ans: "d" // This corresponds to option 'd' as the correct answer
    },
    {
        question: "Q2: Which gas do plants absorb from the atmosphere?",
        a: "Oxygen",
        b: "Carbon dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q3: Who wrote the play 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "F. Scott Fitzgerald",
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q4: What is the chemical symbol for gold?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Cu",
        ans: "a" // This corresponds to option 'a' as the correct answer
    },
    {
        question: "Q5: Which planet is known as the 'Red Planet'?",
        a: "Mars",
        b: "Venus",
        c: "Mercury",
        d: "Jupiter",
        ans: "a" // This corresponds to option 'a' as the correct answer
    },
    {
        question: "Q6: What is the largest mammal in the world?",
        a: "Lion",
        b: "Elephant",
        c: "Blue whale",
        d: "Giraffe",
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q7: Which gas is responsible for the Earth's ozone layer?",
        a: "Oxygen",
        b: "Carbon dioxide",
        c: "Ozone",
        d: "Methane",
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q8: What is the largest planet in our solar system?",
        a: "Venus",
        b: "Earth",
        c: "Jupiter",
        d: "Saturn",
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q9: Who is the author of the novel 'To Kill a Mockingbird'?",
        a: "George Orwell",
        b: "J.D. Salinger",
        c: "Harper Lee",
        d: "Ernest Hemingway",
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q10: What is the chemical symbol for water?",
        a: "O2",
        b: "CO2",
        c: "H2O",
        d: "CH4",
        ans: "c" // This corresponds to option 'c' as the correct answer
    }
];

// You can include this code in your JavaScript file for the 10th-grade quiz.
const question = document.querySelector('.question');
const option1 = document.querySelector('#Option1'); // Ensure that IDs match your HTML
const option2 = document.querySelector('#Option2'); // Ensure that IDs match your HTML
const option3 = document.querySelector('#Option3'); // Ensure that IDs match your HTML
const option4 = document.querySelector('#Option4'); // Ensure that IDs match your HTML
const submitButton = document.querySelector('#button');
const previousButton = document.querySelector('#previous');
const resetButton = document.querySelector('#reset');

const answers = document.querySelectorAll('.answer');
const scoreArea = document.querySelector('#showscore'); // Update ID to match your HTML

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  if (questionCount === quiz.length) {
    // Display the score when all questions are answered
    showScore();
  } else {
    const currentQuestion = quiz[questionCount];

    question.innerText = currentQuestion.question;
    option1.innerText = currentQuestion.a;
    option2.innerText = currentQuestion.b;
    option3.innerText = currentQuestion.c;
    option4.innerText = currentQuestion.d;

    deselectAll();
  }
};

loadQuestion();

const getCheckedAnswer = () => {
  for (const curAnsElem of answers) {
    if (curAnsElem.checked) {
      return curAnsElem.id;
    }
  }
  return null; // Return null if no answer is checked
};

submitButton.addEventListener('click', () => {
  const checkedAnswer = getCheckedAnswer();

  if (checkedAnswer === null) {
    // No answer is checked
    return;
  }

  // Check if the current question has an 'ans' property
  if (quiz[questionCount].ans === checkedAnswer) { // Compare with the correct answer
    score++;
  }

  questionCount++;

  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    showScore(); // Show the score when the last question is reached
  }
});

previousButton.addEventListener('click', () => {
  if (questionCount > 0) {
    questionCount--;
    loadQuestion();
  }
});

resetButton.addEventListener('click', () => {
  questionCount = 0;
  score = 0;
  loadQuestion();
  scoreArea.innerHTML = ''; // Clear the previous result
});

function deselectAll() {
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false;
  });
}

function showScore() {
  scoreArea.innerHTML = `
    <h3>You scored ${score} out of ${quiz.length}</h3>
    <button id="reload" onclick="location.reload()">Play Again</button>
  `;
  scoreArea.classList.remove('scoreArea');
}