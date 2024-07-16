const trivia = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
  },
  {
    question: "How many continents are there on Earth?",
    answer: "Seven",
  },
  {
    question: "What is the chemical symbol for water?",
    answer: "H2O",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "In which year did the Titanic sink?",
    answer: "1912",
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the longest river in the world?",
    answer: "Nile River",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answer: "Diamond",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "Japan",
  },
  {
    question: "What is the most widely spoken language in the world?",
    answer: "Mandarin Chinese",
  },
  {
    question: "Who is the author of 'Harry Potter' series?",
    answer: "J.K. Rowling",
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest",
  },
  {
    question: "In what year did the first man land on the moon?",
    answer: "1969",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue Whale",
  },
  {
    question: "Which planet is closest to the Sun?",
    answer: "Mercury",
  },
  {
    question: "How many colors are there in a rainbow?",
    answer: "Seven",
  },
];

trivia.map((trivia) => {
  const div = document.createElement("div");
  div.classList.add("trivia-card");

  div.innerHTML = `<h2>${trivia.question}</h2><p class="answer">${trivia.answer}</p>`;
  document.getElementById("trivia").appendChild(div);

  div.addEventListener("click", () => {
    div.querySelector(".answer").classList.toggle("show");
  });
});
