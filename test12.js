// Define quiz questions and correct answers for the 12th-grade quiz
const quiz = [
    {
        question: "Q1: Who is the author of 'Pride and Prejudice'?",
    
            a: "Jane Austen",
            b: "Charles Dickens",
            c: "F. Scott Fitzgerald",
            d: "George Orwell",

            ans: "a" // This corresponds to option 'a' as the correct answer
    },
    {
        question: "Q2: What is the chemical symbol for silver?",
        
            a: "Au",
            b: "Ag",
            c: "Si",
            d: "Sr",

        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q3: Who wrote the 'Theory of Relativity'?",
        
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Galileo Galilei",
            d: "Stephen Hawking",
       
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q4: What is the capital of Brazil?",
       
            a: "Buenos Aires",
            b: "Brasília",
            c: "Rio de Janeiro",
            d: "São Paulo",
        
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q5: In which year did the French Revolution begin?",
       
            a: "1776",
            b: "1789",
            c: "1804",
            d: "1812",
       
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q6: What is the chemical symbol for calcium?",
        
            a: "C",
            b: "Ca",
            c: "Cl",
            d: "Cu",
       
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q7: Who is known as the 'Father of Modern Physics'?",
       
            a: "Isaac Newton",
            b: "Galileo Galilei",
            c: "Albert Einstein",
            d: "Stephen Hawking",
        
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q8: Which planet is often called the 'Red Planet'?",
       
            a: "Mars",
            b: "Venus",
            c: "Mercury",
            d: "Jupiter",
      
        ans: "a" // This corresponds to option 'a' as the correct answer
    },
    {
        question: "Q9: What is the largest organ in the human body?",
       
            a: "Brain",
            b: "Heart",
            c: "Skin",
            d: "Liver",
        
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q10: Who is the author of 'The Great Gatsby'?",
        
            a: "F. Scott Fitzgerald",
            b: "Ernest Hemingway",
            c: "J.D. Salinger",
            d: "Mark Twain",
        
        ans: "a" // This corresponds to option 'a' as the correct answer
    }
];

// You can include this code in your JavaScript file for the 12th-grade quiz.

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