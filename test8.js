// Define quiz questions and correct answers for the quiz
const quiz = [
    {
        question: "Q1: Who is the author of the Harry Potter book series?",
        a: "J.K. Rowling",
        b: "Roald Dahl",
        c: "Suzanne Collins",
        d: "George Orwell",
        ans: "a" // This corresponds to option 'a' as the correct answer
    },
    {
        question: "Q2: What is the longest river in the world?",
        a: "Amazon River",
        b: "Nile River",
        c: "Mississippi River",
        d: "Yangtze River",
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q3: What is the largest planet in our solar system?",
        a: "Venus",
        b: "Earth",
        c: "Jupiter",
        d: "Saturn",
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q4: Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q5: What is the process by which plants convert sunlight into energy called?",
        a: "Photosynthesis",
        b: "Respiration",
        c: "Transpiration",
        d: "Digestion",
        ans: "a" // This corresponds to option 'a' as the correct answer
    },
    {
        question: "Q6: Which gas do plants release into the atmosphere as a byproduct of photosynthesis?",
        a: "Oxygen",
        b: "Carbon dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        ans: "a" // This corresponds to option 'a' as the correct answer
    },
    {
        question: "Q7: What is the capital city of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Brisbane",
        ans: "c" // This corresponds to option 'c' as the correct answer
    },
    {
        question: "Q8: Which planet is often referred to as the 'Morning Star' or 'Evening Star' and is the brightest object in the night sky after the Moon?",
        a: "Mars",
        b: "Venus",
        c: "Mercury",
        d: "Jupiter",
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q9: Who wrote the famous novel 'The Adventures of Tom Sawyer'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "Jane Austen",
        d: "Jules Verne",
        ans: "b" // This corresponds to option 'b' as the correct answer
    },
    {
        question: "Q10: What is the longest bone in the human body?",
        a: "Femur",
        b: "Radius",
        c: "Tibia",
        d: "Ulna",
        ans: "a" // This corresponds to option 'a' as the correct answer
    }
];
  

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