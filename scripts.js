const quizData=[
    {
        question:"Who was the first prime minister of India?",
        a:"Jawahar Lal Nehru",
        b:"Babasahev Ambedkar",
        c:"Sardar Vallabai Patel",
        d:"Bala Gangadhara Tilak",
        correct:"a",
    },
    {
        question:"Which one is the longest organs of our body?",
        a:"skin",
        b:"Liver",
        c:"Large-intestine",
        d:"small-intenstine",
        correct:"a",
    },
    {
        question:"Who came up with the idea of c#?",
        a:"Sundar Pichai",
        b:"Andres Heijlsberg",
        c:"Microsoft",
        d:"Michael Dell",
        correct:"b",
    },
    {
        question:"Who was the CFO of META",
        a:"Mark Zuckerburg",
        b:"Susan Li",
        c:"Andrew McCollen",
        d:"Michael Dell",
        correct:"b",
    },
    {
        question:"In which Netflix series we know about the formation of Spotify?",
        a:"Spotify-The new music era.",
        b:"Spotify-The sunrise of music ",
        c:"Playlist",
        d:"Sony-liv",
        correct:"c",
    },
    {
        question:"Which Netflix series is the most viewed show by now?",
        a:"Squid Game.",
        b:"Wednesday.",
        c:"1899",
        d:"The watcher",
        correct:"b",
    },
    {
        question:"According to the current statistics of Website developer community which frontend framework is the best?",
        a:"REACT",
        b:"VUE.js",
        c:"Angular",
        d:"Next.js",
        correct:"a",
    },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        ` 
    }
  }
});