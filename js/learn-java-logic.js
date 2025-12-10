// Ce fichier suppose qu'un fichier de leçons a déjà défini
// une variable globale `window.LESSONS` (en, fr, de, es, etc.).
// Exemple sur la page FR : /js/lessons/fr-lessons.js

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("terminal-title");
  const outputEl = document.getElementById("output");
  const inputEl = document.getElementById("code-input");
  const feedbackEl = document.getElementById("feedback");
  const scoreEl = document.getElementById("score");

  const runBtn = document.getElementById("run-btn");
  const hintBtn = document.getElementById("hint-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Récupère les leçons depuis le global
  const LESSONS = window.LESSONS;

  // Sécurité : vérifier que LESSONS existe
  if (!Array.isArray(LESSONS) || LESSONS.length === 0) {
    outputEl.innerHTML =
      "<p style='color:#fecaca'>❌ Impossible de charger les leçons (tableau LESSONS vide ou introuvable).</p>";
    return;
  }

  let currentIndex = 0;
  let score = 0; // 0–100

  function updateScoreDisplay() {
    scoreEl.textContent = `Score : ${score} / 100`;
  }

  function setScoreForLesson(idx) {
    // 100 leçons => 1 point par leçon correcte
    const points = Math.min(100, idx + 1);
    if (points > score) {
      score = points;
      updateScoreDisplay();
    }
  }

  function renderLesson() {
    const lesson = LESSONS[currentIndex];

    titleEl.textContent = `OreoOS > Leçon ${lesson.id} / ${LESSONS.length} — ${lesson.title}`;

    outputEl.innerHTML = `
      <p><strong>Leçon ${lesson.id} / ${LESSONS.length}</strong> · <span>${lesson.title}</span></p>
      <p>${lesson.prompt}</p>
      <p class="terminal-tip">
        Tape ton code entre les accolades de <code>main</code> puis clique sur <strong>[Exécuter Code]</strong>.
      </p>
    `;

    feedbackEl.textContent = "";
    feedbackEl.className = "terminal-feedback";

    // Code de départ optionnel
    inputEl.value = lesson.starting_code || "";
  }

  function showSuccess(lesson) {
    feedbackEl.className = "terminal-feedback success";
    feedbackEl.innerHTML = `
      ✅ <strong>Correct !</strong><br/>
      Sortie attendue : <code>${lesson.correct_output}</code>
    `;
  }

  function showError(lesson) {
    feedbackEl.className = "terminal-feedback error";
    feedbackEl.innerHTML = `
      ❌ <strong>Pas encore.</strong><br/>
      Astuce : ${lesson.error_tip || "Vérifie ta syntaxe et les points-virgules ;)"}
    `;
  }

  function goToNextLesson() {
    if (currentIndex < LESSONS.length - 1) {
      currentIndex++;
      renderLesson();
    } else {
      titleEl.textContent = "OreoOS > Cours terminé 🎉";
      outputEl.innerHTML = `
        <p><strong>Bravo !</strong> Tu as complété toutes les leçons.</p>
        <p>Tu peux modifier le code librement pour t'entraîner.</p>
      `;
    }
  }

  // Bouton "Exécuter Code"
  runBtn.addEventListener("click", () => {
    const lesson = LESSONS[currentIndex];
    const userCode = inputEl.value || "";

    try {
      const ok = lesson.validation(userCode);

      if (ok) {
        showSuccess(lesson);
        setScoreForLesson(currentIndex);

        // ✅ SON DE RÉUSSITE
        if (window.SoundManager && typeof window.SoundManager.playWin === "function") {
          window.SoundManager.playWin();
        }

        // Passage automatique à la prochaine leçon après une petite pause
        setTimeout(goToNextLesson, 900);
      } else {
        showError(lesson);

        // ❌ SON D'ÉCHEC
        if (window.SoundManager && typeof window.SoundManager.playLoose === "function") {
          window.SoundManager.playLoose();
        }
      }
    } catch (e) {
      feedbackEl.className = "terminal-feedback error";
      feedbackEl.innerHTML = `
        ⚠️ Une erreur est survenue dans la validation de la leçon.<br/>
        <code>${e.message}</code>
      `;
      console.error("Erreur validation leçon:", e);

      // ❌ SON D'ÉCHEC EN CAS D'ERREUR AUSSI
      if (window.SoundManager && typeof window.SoundManager.playLoose === "function") {
        window.SoundManager.playLoose();
      }
    }
  });

  // Bouton "Indice"
  hintBtn.addEventListener("click", () => {
    const lesson = LESSONS[currentIndex];
    feedbackEl.className = "terminal-feedback hint";
    feedbackEl.innerHTML = `
      💡 <strong>Indice :</strong> ${lesson.hint || "Réfléchis à la structure correcte en Java."}
    `;
  });

  // Bouton "Réinitialiser"
  resetBtn.addEventListener("click", () => {
    const lesson = LESSONS[currentIndex];
    inputEl.value = lesson.starting_code || "";
    feedbackEl.textContent = "";
    feedbackEl.className = "terminal-feedback";
  });

  // Premier rendu
  updateScoreDisplay();
  renderLesson();
});
