const questions = [
    { question: "Wie sagt man 'книга' auf Deutsch?", options: ["Buch", "Auto", "Haus", "Stuhl"], correctAnswer: "Buch" },
    { question: "Wie sagt man 'собака' auf Deutsch?", options: ["Katze", "Hund", "Vogel", "Maus"], correctAnswer: "Hund" },
    { question: "Wie sagt man 'яблоко' auf Deutsch?", options: ["Apfel", "Banane", "Kirsche", "Orange"], correctAnswer: "Apfel" },
    { question: "Wie sagt man 'машина' auf Deutsch?", options: ["Fahrrad", "Auto", "Bus", "Flugzeug"], correctAnswer: "Auto" },
    { question: "Wie sagt man 'дом' auf Deutsch?", options: ["Haus", "Buch", "Schule", "Garten"], correctAnswer: "Haus" },
    { question: "Wie sagt man 'школа' auf Deutsch?", options: ["Schule", "Universität", "Bibliothek", "Küche"], correctAnswer: "Schule" },
    { question: "Wie sagt man 'вода' auf Deutsch?", options: ["Bier", "Wasser", "Saft", "Milch"], correctAnswer: "Wasser" },
    { question: "Wie sagt man 'солнце' auf Deutsch?", options: ["Mond", "Sonne", "Regen", "Wind"], correctAnswer: "Sonne" },
    { question: "Wie sagt man 'друг' auf Deutsch?", options: ["Freund", "Feind", "Kollege", "Nachbar"], correctAnswer: "Freund" },
    { question: "Wie sagt man 'молоко' auf Deutsch?", options: ["Milch", "Käse", "Butter", "Joghurt"], correctAnswer: "Milch" },
    { question: "Wie sagt man 'ребёнок' auf Deutsch?", options: ["Kind", "Mensch", "Junge", "Mädchen"], correctAnswer: "Kind" },
    { question: "Wie sagt man 'мать' auf Deutsch?", options: ["Mutter", "Vater", "Oma", "Tante"], correctAnswer: "Mutter" },
    { question: "Wie sagt man 'отец' auf Deutsch?", options: ["Vater", "Bruder", "Onkel", "Sohn"], correctAnswer: "Vater" },
    { question: "Wie sagt man 'дверь' auf Deutsch?", options: ["Tür", "Fenster", "Wand", "Boden"], correctAnswer: "Tür" },
    { question: "Wie sagt man 'окно' auf Deutsch?", options: ["Fenster", "Tür", "Decke", "Boden"], correctAnswer: "Fenster" },
    { question: "Wie sagt man 'стол' auf Deutsch?", options: ["Tisch", "Stuhl", "Sofa", "Bett"], correctAnswer: "Tisch" },
    { question: "Wie sagt man 'стул' auf Deutsch?", options: ["Stuhl", "Tisch", "Sofa", "Bett"], correctAnswer: "Stuhl" },
    { question: "Wie sagt man 'собака' auf Deutsch?", options: ["Katze", "Hund", "Vogel", "Maus"], correctAnswer: "Hund" },
    { question: "Wie sagt man 'птица' auf Deutsch?", options: ["Katze", "Hund", "Vogel", "Maus"], correctAnswer: "Vogel" },
    { question: "Wie sagt man 'мышь' auf Deutsch?", options: ["Maus", "Katze", "Hund", "Vogel"], correctAnswer: "Maus" },
    { question: "Wie sagt man 'лошадь' auf Deutsch?", options: ["Pferd", "Hund", "Katze", "Vogel"], correctAnswer: "Pferd" },
    // Добавь сюда еще вопросы (до 100)
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map(option => `
            <button class="option" onclick="checkAnswer('${option}')">${option}</button>
        `).join('')}
    `;
    document.getElementById("next-btn").disabled = true;
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        score++;
    }
    document.getElementById("score").innerText = `Pontuação: ${score}`;
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Você completou o quiz! Sua pontuação final é ${score}`);
    }
}

loadQuestion();
