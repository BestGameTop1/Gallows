// let name = prompt("Как вас зовут?");
// console.log("Привет, " + name);

// var likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//     console.log("Ты классная кошка!");
// } else {
//     console.log("Что ж, не проблема. Все равно ты молодец!");
// }

// alert("JavaScript это здорово!");






var pickWord = function () {
    // Возвращает случайно выбранное слово
    var words = [
        "программа",
        "макака",
        "прекрасный",
        "оладушек"
    ];

    return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
    // Возвращает итоговый массив для заданного слова word
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    return answerArray;
};

var showPlayerProgress = function (answerArray) {
    // С помощью alert отображает текущее состояние игры
    alert(answerArray.join(" "));
};

var getGuess = function () {
    // Запрашивает ответ игрока с помощью prompt
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};

var updateGameState = function (guess, word, answerArray) {
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
    var appearances = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }

    return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    // С помощью alert показывает игроку отгаданное слово
    // и поздравляет его с победой
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
};

// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);



