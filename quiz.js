const quizData = [
    {
      question: "Who is the protagonist of Video 1?",
      options: ["Blue", "Prez", "Green", "Goldilocks"],
      answer: "Blue"
    },
    {
      question: "True or False: Blue loves to go outside at the beginning.",
      options: ["True", "False"],
      answer: "False"
    },
    {
      question: "What color are the background characters of Video 1?",
      options: ["Light Blue", "Pink", "Green", "Orange"],
      answer: "Light Blue"
    },
    {
      question: "Which of these does Blue know by the end?",
      options: ["Chemistry", "History", "Math", "English", "Sports", "Music", "All of the above", "None of the above"],
      answer: "All of the above"
    },
    {
      question: "True or False: Blue gets a magical book.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "What sport does Blue start to play?",
      options: ["Football", "Soccer", "Tennis", "Basketball"],
      answer: "Soccer"
    },
    {
      question: "The theme of Video 1 is Be __ to __",
      options: ["Enthusiastic, Fail", "Prepared, Test", "Inspired, Learn", "Ready, Pass"],
      answer: "Inspired, Learn"
    },
    {
      question: "What are Blue's friends talking about?",
      options: ["A book", "A hero", "A test", "A storm"],
      answer: "A book"
    },
    {
      question: "True or False: Blue's full name is Blue Aquamarine Turquoise Ocean.",
      options: ["True", "False"],
      answer: "False"
    },
    {
      question: "How many friends does Blue have?",
      options: ["1", "2", "3", "4"],
      answer: "2"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  let result = "";
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    total = score/quizData.length * 100;
    if (total >= 90) {
      result = "Excellent job!";
    }
    else if (total >= 80) {
      result = "Good job!";
    }
    else if (total >= 70) {
      result = "Good effort!";
    }
    else {
      result = "Better luck next time!";
    }
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${total}%. ${result}</p>
    `;
  }
  
  showQuestion();