const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const time = document.querySelector("#time-left");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question:
      "What was the name of the Pygmy Puff Ginny bought from Weasleys’ Wizard Wheezes?",
    choice1: "Hugo",
    choice2: "Barry",
    choice3: "Arnold",
    choice4: "Craig",
    answer: 3,
  },
  {
    question: "Which is the correct Wand core type among the following?",
    choice1: "Dragon heartstrings",
    choice2: "Unicorn hair",
    choice3: "Phoenix feathers",
    choice4: "All of the above",
    answer: 4,
  },
  {
    question: "Who saved Buckbeak from being executed?",
    choice1: "Harry and Hermione",
    choice2: "Harry and Ron",
    choice3: "Hermoine and Ron",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question:
      "What is the name of the plant that Harry uses in order to breathe underwater during the Tri-Wizard tournament?",
    choice1: "Alihotsy",
    choice2: "Gillyweed",
    choice3: "Valerian",
    choice4: "None of the above",
    answer: 2,
  },
  {
    question: "Who is Harry's godfather?",
    choice1: "Dumbeldore",
    choice2: "Snape",
    choice3: "Lupin",
    choice4: "Sirius",
    answer: 4,
  },
  {
    question: "What is Voldemort's middle name?",
    choice1: "Marvalo",
    choice2: "Gaunt",
    choice3: "Salazar",
    choice4: "Riddle",
    answer: 1,
  },
  {
    question:
      "What were the middle names Albus Dumbledore had? (Hint- He told it in front of the Minister of Magic in Order of Phoneix)",
    choice1: "Percival Wulfric Brian",
    choice2: "Percival Brian",
    choice3: "Wulfric Brian",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question: "Which of these are the ingredients for the Polyjuice Potion?",
    choice1: "Lacewing flies(stewed for 10 days), Boomslang skin",
    choice2: "Gillyweed, knotgrass",
    choice3: "Lacewing flies(stewed for 21 days), shredded Boomslang skin",
    choice4: "McNuggets and fries",
    answer: 3,
  },
  {
    question:
      "A spell when cast, causes severe haemmorhage, and lacerates the target. What spell am i talking bout?",
    choice1: "Crucio",
    choice2: "Rictumsempra",
    choice3: "Sectumsempra",
    choice4: "Alahamora",
    answer: 3,
  },
  {
    question: "What are the names of Severus Snape's parents?",
    choice1: "Tobias Snape and Eileen Snape",
    choice2: "Tripp snape and Eliana Snape",
    choice3: "Not mentioned in the book",
    choice4: "Theodore Snape and Eveleen Snape",
    answer: 1,
  },
  {
    question: "How many exceptions are there to Gamp's Elemental Law?",
    choice1: "3",
    choice2: "6",
    choice3: "2",
    choice4: "5",
    answer: 4,
  },
  {
    question: "Which of these animals is Harry Potter's patronus?",
    choice1: "Cat",
    choice2: "Stag",
    choice3: "Fox",
    choice4: "Phoenix",
    answer: 2,
  },
  {
    question: "Which Hogwarts house is represented by a serpent?",
    choice1: "Gryffindor",
    choice2: "Hufflepuff",
    choice3: "Ravenclaw",
    choice4: "Slytherin",
    answer: 4,
  },
  {
    question: "What is Harry Potter's favourite food?",
    choice1: "Treacle tart",
    choice2: "Chocolate frogs",
    choice3: "Pumpkin pasties",
    choice4: "Rock cakes",
    answer: 1,
  },
  {
    question: "Who killed Nagini, Voldemort's snake?",
    choice1: "Luna Lovegood",
    choice2: "Ginny Weasley",
    choice3: "Neville Longbottom",
    choice4: "Dean Thomas",
    answer: 3,
  },
  {
    question: "What colour fur does Crookshanks have? (Hermiones's cat)",
    choice1: "Grey",
    choice2: "Black and white",
    choice3: "Tabby",
    choice4: "Ginger",
    answer: 4,
  },
];

const SCORE_POINTS = 5;
const MAX_QUESTIONS = 15;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  questionCounter++;
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }
  count = 15;
  function timer() {
    count = count < 10 ? "0" + count : count;
    time.innerHTML = `${count}`;
    if (count < 1) {
      window.clearInterval(update);
      getNewQuestion();
      alert("You're out of time!");
    }
    count--;
  }
  update = setInterval(timer, 1000);
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const parentToselectedChoice = e.target.parentElement;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }
    window.clearInterval(update);
    parentToselectedChoice.classList.add(classToApply);

    setTimeout(() => {
      parentToselectedChoice.classList.remove(classToApply);

      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
