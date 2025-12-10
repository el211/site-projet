// file: js/learn-java-logic.js (Universal Logic)

// NOTE: This script assumes the global constant array LESSONS is defined 
// by a language-specific file (e.g., en-lessons.js) loaded before this one.

document.addEventListener("DOMContentLoaded", () => {
    initJavaTerminal();
});

let currentLessonIndex = 0;
let totalScore = 0;
let totalLessons = 0; // Will be set in initJavaTerminal

const outputEl = document.getElementById('output');
const inputEl = document.getElementById('code-input');
const runBtn = document.getElementById('run-btn');
const resetBtn = document.getElementById('reset-btn');
const hintBtn = document.getElementById('hint-btn');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const titleEl = document.getElementById('terminal-title');

function displayLesson(index) {
    // Check if LESSONS array is loaded and valid
    if (!Array.isArray(LESSONS) || LESSONS.length === 0) {
        outputEl.innerHTML = `<p class='error'>Error: Lesson content failed to load.</p>`;
        return;
    }
    
    totalLessons = LESSONS.length;

    if (index >= totalLessons) {
        outputEl.innerHTML = `<p class='success'>🎉 **MISSION COMPLETE!** You fixed all the bugs and learned Java basics. Final Score: ${totalScore}/${totalLessons}</p><p>You are now ready for the next level of Java programming!</p>`;
        runBtn.disabled = true;
        inputEl.disabled = true;
        hintBtn.disabled = true;
        titleEl.textContent = `OreoOS > Status: Training Complete`;
        scoreEl.textContent = `Score: ${totalScore} / ${totalLessons}`;
        return;
    }

    const lesson = LESSONS[index];
    outputEl.innerHTML = `
        <p>👋 **Welcome, Operator!** Your mission is to fix the galaxy's syntax errors.</p>
        <p>**LESSON ${index + 1} / ${totalLessons}: ${lesson.title}**</p>
        <p>${lesson.prompt}</p>
    `;
    titleEl.textContent = `OreoOS > Lesson ${index + 1}: ${lesson.title}`;
    inputEl.value = '';
    feedbackEl.innerHTML = '';
    scoreEl.textContent = `Score: ${totalScore} / ${totalLessons}`;
    hintBtn.disabled = false;
}

function runCode() {
    const inputCode = inputEl.value.trim().replace(/\s+/g, ' '); 
    const lesson = LESSONS[currentLessonIndex];

    if (!inputCode) {
        feedbackEl.innerHTML = "<p class='error'>Error: Input cannot be empty. Try again!</p>";
        return;
    }

    if (lesson.validation(inputCode)) {
        totalScore++;
        currentLessonIndex++;
        
        feedbackEl.innerHTML = `<p class='success'>✅ **SYNTAX ACCEPTED!** Output: ${lesson.correct_output}</p>`;
        
        if (window.SoundManager) {
            window.SoundManager.playWin(); 
        }

        setTimeout(() => {
            displayLesson(currentLessonIndex);
        }, 1500);

    } else {
        if (window.SoundManager) {
            window.SoundManager.playLoose();
        }

        feedbackEl.innerHTML = `
            <p class='error'>❌ **COMPILATION FAILED.**</p>
            <p class='error-tip'>Tip: ${lesson.error_tip}</p>
        `;
    }
}

function giveHint() {
    const lesson = LESSONS[currentLessonIndex];
    if (lesson && lesson.hint) {
        feedbackEl.innerHTML = `<p class='hint hint-pulse'>💡 HINT: ${lesson.hint}</p>`;
        hintBtn.disabled = true;

        setTimeout(() => {
            const hintElement = feedbackEl.querySelector('.hint-pulse');
            if (hintElement) {
                hintElement.classList.remove('hint-pulse');
            }
        }, 500); 
    }
}

function resetLesson() {
    currentLessonIndex = 0;
    totalScore = 0;
    runBtn.disabled = false;
    inputEl.disabled = false;
    hintBtn.disabled = false;
    displayLesson(currentLessonIndex);
}

function initJavaTerminal() {
    if (!outputEl) return; 
    
    runBtn.addEventListener('click', runCode);
    resetBtn.addEventListener('click', resetLesson);
    hintBtn.addEventListener('click', giveHint);
    
    // Initial display
    displayLesson(currentLessonIndex);
}