const questions = [
    { question: "¿Cuántas leyes de Kepler hay?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "¿Qué describe la primera ley de Kepler?", options: ["Órbitas elípticas", "Velocidad orbital", "Gravedad", "Semieje menor"], answer: "Órbitas elípticas" },
    { question: "¿Qué forma tienen las órbitas según Kepler?", options: ["Circulares", "Elípticas", "Parabólicas", "Hipérbolas"], answer: "Elípticas" },
    { question: "El Sol ocupa un:", options: ["Centro", "Foco", "Lado", "Semieje mayor"], answer: "Foco" },
    { question: "¿Qué explica la segunda ley de Kepler?", options: ["Velocidad orbital", "Áreas barridas", "Gravedad", "Tiempo orbital"], answer: "Áreas barridas" },
    { question: "¿Qué barre un planeta en tiempos iguales?", options: ["Áreas iguales", "Áreas distintas", "Perímetro", "Volumen"], answer: "Áreas iguales" },
    { question: "¿Cómo varía la velocidad orbital?", options: ["Constante", "Aumenta cerca del Sol", "Disminuye cerca del Sol", "Siempre máxima"], answer: "Aumenta cerca del Sol" },
    { question: "La tercera ley relaciona:", options: ["Período y semieje mayor", "Gravedad y velocidad", "Áreas y tiempo", "Fuerza y distancia"], answer: "Período y semieje mayor" },
    { question: "¿El período orbital al cuadrado es proporcional a qué?", options: ["Semieje mayor al cubo", "Radio al cuadrado", "Área total", "Masa del planeta"], answer: "Semieje mayor al cubo" },
    { question: "¿Qué significa perihelio?", options: ["Punto más cercano al Sol", "Punto más lejano al Sol", "Centro de la órbita", "Órbita circular"], answer: "Punto más cercano al Sol" },
    { question: "¿Qué significa afelio?", options: ["Punto más lejano al Sol", "Punto más cercano al Sol", "Órbita más rápida", "Centro de la órbita"], answer: "Punto más lejano al Sol" },
    { question: "¿Qué científico influyó en Kepler?", options: ["Copérnico", "Newton", "Einstein", "Hawking"], answer: "Copérnico" },
    { question: "¿Qué estudió Kepler?", options: ["Movimiento planetario", "Física cuántica", "Átomos", "Energía nuclear"], answer: "Movimiento planetario" },
    { question: "¿En qué año publicó Kepler su primera ley?", options: ["1609", "1509", "1709", "1809"], answer: "1609" },
    { question: "¿Qué astrónomo proporcionó datos a Kepler?", options: ["Tycho Brahe", "Galileo Galilei", "Newton", "Ptolomeo"], answer: "Tycho Brahe" },
    { question: "¿Qué planeta fue clave para Kepler?", options: ["Marte", "Venus", "Júpiter", "Saturno"], answer: "Marte" },
    { question: "La segunda ley es conocida como:", options: ["Ley de áreas", "Ley de elipses", "Ley de proporciones", "Ley de velocidades"], answer: "Ley de áreas" },
    { question: "La tercera ley conecta el movimiento orbital con:", options: ["La distancia al Sol", "El tiempo en días", "La inclinación orbital", "El volumen planetario"], answer: "La distancia al Sol" },
    { question: "¿Qué libro famoso escribió Kepler?", options: ["Astronomía Nova", "Diálogo sobre los sistemas", "Principia Mathematica", "De Revolutionibus"], answer: "Astronomía Nova" },
    { question: "¿Cuál es el movimiento descrito por Kepler?", options: ["Elíptico", "Rectilíneo", "Circular", "Parabólico"], answer: "Elíptico" },
    { question: "La velocidad orbital es mayor en:", options: ["El perihelio", "El afelio", "El centro", "Siempre constante"], answer: "El perihelio" },
    { question: "¿Qué propiedad es constante en una órbita?", options: ["Área barrida en tiempo igual", "Velocidad constante", "Forma circular", "Ángulo constante"], answer: "Área barrida en tiempo igual" },
    { question: "La tercera ley también se conoce como:", options: ["Ley armónica", "Ley orbital", "Ley del tiempo", "Ley gravitacional"], answer: "Ley armónica" },
    { question: "¿Qué unidades utiliza Kepler en la tercera ley?", options: ["Unidades astronómicas y años", "Kilómetros y segundos", "Millas y días", "Luz y meses"], answer: "Unidades astronómicas y años" },
    { question: "La tercera ley ayuda a calcular:", options: ["La distancia entre planetas", "La masa del Sol", "La inclinación orbital", "El área barrida"], answer: "La distancia entre planetas" },
    { question: "Kepler demostró que los planetas no se mueven en:", options: ["Círculos perfectos", "Elipses", "Parábolas", "Órbitas abiertas"], answer: "Círculos perfectos" },
    { question: "¿Quién confirmó las leyes de Kepler mediante observación?", options: ["Newton", "Galileo", "Einstein", "Copérnico"], answer: "Galileo" },
    { question: "¿Qué determina el semieje mayor?", options: ["El tamaño de la órbita", "La inclinación orbital", "La velocidad máxima", "El tiempo de perihelio"], answer: "El tamaño de la órbita" },
    { question: "¿Cuánto tiempo tardó Kepler en descubrir sus leyes?", options: ["10 años", "20 años", "5 años", "1 año"], answer: "20 años" },
    { question: "¿Qué relación tiene la gravedad con las leyes de Kepler?", options: ["Es la fuerza responsable", "No tiene relación", "Es perpendicular a la órbita", "Es menor en el afelio"], answer: "Es la fuerza responsable" },
    { question: "Kepler colaboró con:", options: ["Tycho Brahe", "Isaac Newton", "Albert Einstein", "Galileo"], answer: "Tycho Brahe" },
    { question: "¿Cuál es la importancia de las leyes de Kepler?", options: ["Fundamentan la mecánica celeste", "Explican la velocidad de la luz", "Son la base de la energía nuclear", "Son irrelevantes hoy"], answer: "Fundamentan la mecánica celeste" }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const quiz = document.getElementById("quiz");
    const question = questions[currentQuestion];

    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `<p>${question.question}</p>`;
    
    const optionsList = document.createElement("ul");
    question.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<button onclick="checkAnswer('${option}')">${option}</button>`;
        optionsList.appendChild(li);
    });
    
    questionElement.appendChild(optionsList);
    quiz.innerHTML = '';
    quiz.appendChild(questionElement);
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].answer;
    if (answer === correctAnswer) {
        score++;
    }
    document.getElementById("score").innerText = `Puntaje: ${score}`;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("score").innerText = `Puntaje Final: ${score}`;
        document.querySelector(".btn").disabled = true;
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        displayQuestion();
    }
}

window.onload = displayQuestion;
