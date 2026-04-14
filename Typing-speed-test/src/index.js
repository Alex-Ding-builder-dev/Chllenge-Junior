const state = {
    isStart: false,
    isFinished: false,
    text: '',
    input: '',
    difficulty: 'hard',
    mode: 'timed',
    personalBest: 0,
    timeRemaining: 60,
    timeElapsed: 0,
    timer: null,
    wpm: 0,
    accuracy: 100,
}

const DOM = {
    start: document.querySelector('#start'),
    wpm: document.querySelector('#wpm'),
    accuracy: document.querySelector('#accuracy'),
    time: document.querySelector('#time'),
    best: document.querySelector('#best'),
    article: document.querySelector('#article'),
    easy: document.querySelector('#easy'),
    medium: document.querySelector('#medium'),
    hard: document.querySelector('#hard'),
    Easy: document.querySelector('#Easy'),
    Medium: document.querySelector('#Medium'),
    Hard: document.querySelector('#Hard'),
    difficulty: document.querySelector('#difficulty'),
    mode: document.querySelector('#mode'),
    timed: document.querySelector('#timed'),
    passage: document.querySelector('#passage'),
    menu: document.querySelector('#menu'),
    menu2: document.querySelector('#menu2'),
    toggle: document.querySelector('#toggle'),
    toggle2: document.querySelector('#toggle2'),
    dialog: document.querySelector('dialog'),
    blur: document.querySelector('#blur'),
}

function init() {
    DOM.menu.addEventListener('click', toggleMenu);
    DOM.menu2.addEventListener('click', toggleMenu);
    DOM.toggle.addEventListener('click', changeDifficulty);
    DOM.toggle2.addEventListener('click', changeTMode);
    DOM.difficulty.addEventListener('click', changeTextDifficulty);
    DOM.mode.addEventListener('click', changeMode);
    renderText();
    DOM.start.addEventListener('click', startGame);
    window.addEventListener('keydown', handleTyping);
    renderStates();
}

function toggleMenu(e) {
    if (state.isStart === true) return;
    if (e.target === DOM.menu) {
    DOM.toggle.classList.toggle('hidden');
    }
    else if (e.target === DOM.menu2) {
    DOM.toggle2.classList.toggle('hidden');
    }
}

function changeDifficulty(e) {
    const radio = e.target.closest('input[type="radio"]');
    if (!radio) return;
    state.difficulty = radio.id.toLowerCase();
    renderText()
}

function changeTMode(e) {
    const radio = e.target.closest('input[type="radio"]');
    if (!radio) return;
    state.mode = radio.id.toLowerCase();
}

function changeTextDifficulty(e) {
    const difficultyChoise = e.target;
    if (state.isStart === true) return;
    if (difficultyChoise.id === state.difficulty) return;
    if (difficultyChoise !== DOM.easy && difficultyChoise !== DOM.medium && difficultyChoise !== DOM.hard) return;
    state.difficulty = difficultyChoise.id;
    renderText();
}

function changeMode(e) {
    const modeChoice = e.target;
    if (state.isStart === true) return;
    if (modeChoice.textContent === state.mode) return;
    if (modeChoice !== DOM.timed && modeChoice !== DOM.passage) return;
    state.mode = modeChoice.id;
}

function renderText() {
    DOM.article.innerHTML = '';
    if (state.difficulty === 'hard') {
        state.text = `The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic-all discovered in a single Mycenaean tomb-suggested commercial connections far more extensive than previously hypothesized. "We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods," the lead researcher observed. "Globalization isn't as modern as we assume."`;
    }
    else if (state.difficulty === 'easy') {
        state.text = `The dog ran across the park and jumped into the lake. It shook the water off and ran back to its owner. The sun was warm and the sky was blue. It was a good day to be outside.`;
    }
    else if (state.difficulty === 'medium') {
        state.text = `The small coastal town relied on fishing for most of its income. Every morning, the boats left before sunrise and returned by noon with the day's catch. The market filled quickly with locals and tourists alike, drawn by the smell of fresh fish and the sound of vendors calling out their prices.`;
    }
    state.text.split('').forEach(text => {
        const word = document.createElement('span');
        word.textContent = text;
        word.classList.add('span'),
        DOM.article.appendChild(word);
    })
}

function startGame() {
    DOM.dialog.classList.add('hidden');
    DOM.blur.classList.add('hidden');
    DOM.article.classList.remove('blur-[6px]','opacity-40');
    state.isStart = true;
    state.isFinished = false;
    state.timeRemaining = 60;
    state.timeElapsed = 0;
    state.input = '';
    state.timer = setInterval(updateTime, 1000)
}

function updateTime() {
    if (state.mode === 'timed') {
        state.timeElapsed ++;
        state.timeRemaining --;
        if (state.timeRemaining <= 0) endGame();
    }
    if (state.mode === 'passage') {
        state.timeElapsed ++;
    }
    updatePoint();
    renderStates();
}

function updatePoint() {
    if (state.input.length === 0) {
        state.wpm = 0;
        state.accuracy = 100;
        return
    }
    let correctChars = 0;
    for (let i = 0; i < state.input.length; i++) {
        if (state.input[i] === state.text[i]) {
            correctChars ++;
        }
    }
    state.accuracy = Math.round((correctChars / state.input.length) * 100);

    const minutes = state.timeElapsed / 60;

    if (minutes > 0) {
        state.wpm = Math.round((correctChars / 5) /minutes)
    }
    else if (minutes = 0) {
        state.wpm = 0;
    }
}

function handleTyping(e) {
    if (state.isStart === false || state.isFinished === true) return;
    const key = e.key;
    if (key === 'Backspace') {
        state.input = state.input.slice(0,-1);
    }
    else if (key.length === 1) {
        if (state.input.length < state.text.length) {
            state.input += key;
        }
    }
    renderTyping();
}

function renderTyping(e) {
    const spans = document.querySelectorAll('.span');
    spans.forEach((span,index)=> {
        const inputNow = state.input[index];
        const textNow = state.text[index];
        span.className = 'span';
        if (inputNow === undefined) {
            span.classList.add('text-neutral-400');
        }
        else if (inputNow === textNow) {
            span.classList.add('text-green-500')
        }
        else {
            span.classList.add('text-red-500','border-b-[3px]','border-red-500')
        }
        if (index === state.input.length && !state.isFinished) {
            span.classList.add('bg-neutral-700','rounded-[4px]','animate-pulse')
        }
    })
}

function renderStates() {
    DOM.wpm.textContent = state.wpm;
    DOM.accuracy.textContent = `${state.accuracy}%`;

    let displayTime = 0;
    if (state.mode === 'timed') {
        displayTime = state.timeRemaining;
    }
    else {displayTime = state.timeElapsed}
}

function endGame() {
    state.isFinished = true;
    clearInterval(state.timer);
    if (state.wpm > state.personalBest) {
        state.personalBest = state.wpm;

        localStorage.setItem('typing-pb',state.personalBest);
        DOM.best.textContent = state.personalBest;
    }
}

init()