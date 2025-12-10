// file: js/i18n.js
// SIMPLE LANGUAGE REDIRECTION ENGINE (STATIC HTML VERSION)

const SUPPORTED_LANGS = ["en", "fr", "de", "es"];
const DEFAULT_LANG = "en";
const STORAGE_KEY = "portfolio_lang";

// --------------------------
// Helpers
// --------------------------

function getSavedLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return (stored && SUPPORTED_LANGS.includes(stored)) ? stored : null;
  } catch (e) { return null; }
}

function saveLang(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) { /* ignore */ }
}

function normalizeLangCode(code) {
  if (!code) return null;
  const lower = code.toLowerCase();
  if (SUPPORTED_LANGS.includes(lower)) return lower;
  const base = lower.split("-")[0];
  return SUPPORTED_LANGS.includes(base) ? base : null;
}

function detectLangFromBrowser() {
  const nav = window.navigator;
  if (!nav) return null;

  const candidates = [];
  if (Array.isArray(nav.languages)) candidates.push(...nav.languages);
  if (nav.language) candidates.push(nav.language);

  for (const cand of candidates) {
    const normalized = normalizeLangCode(cand);
    if (normalized) return normalized;
  }
  return null;
}

// --------------------------
// Lang switch UI and Redirection
// --------------------------

function setupLangSwitch() {
  const currentPath = window.location.pathname;
  
  // Try to find the current language based on URL structure /xx/page.html
  const langMatch = currentPath.match(/\/([a-z]{2})\//i);
  const currentLang = (langMatch && SUPPORTED_LANGS.includes(langMatch[1])) ? langMatch[1] : DEFAULT_LANG;

  // Set active button based on current URL path
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    const targetLang = btn.getAttribute("data-lang");
    
    // Ensure the initial active state is set correctly
    if (targetLang === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", () => {
      if (!SUPPORTED_LANGS.includes(targetLang) || targetLang === currentLang) return;
      
      saveLang(targetLang);

      // Create new path by replacing the current language segment
      // e.g., /en/oreoessentials.html -> /fr/oreoessentials.html
      const newPath = currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
      
      window.location.href = newPath;
    });
  });
}

// --------------------------
// Initial Redirect Logic
// --------------------------

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = getSavedLang();
  
  const currentPath = window.location.pathname;
  const pathLangMatch = currentPath.match(/\/([a-z]{2})\//i);
  const currentLangInPath = pathLangMatch ? pathLangMatch[1] : null;

  // 1. Initial Access Check: If user hits /, redirect to preferred language.
  if (currentPath === '/') {
      const targetLang = savedLang || detectLangFromBrowser() || DEFAULT_LANG;
      window.location.replace(`/${targetLang}/index.html`);
      return;
  }
  
  // 2. Saved Preference Check: If saved lang conflicts with path, redirect.
  if (currentLangInPath && savedLang && savedLang !== currentLangInPath) {
      const newPath = currentPath.replace(`/${currentLangInPath}/`, `/${savedLang}/`);
      window.location.replace(newPath);
      return;
  }

  // 3. If language in path is active, but not saved, save it now.
  if (currentLangInPath && !savedLang) {
      saveLang(currentLangInPath);
  }

  setupLangSwitch();
});