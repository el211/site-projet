// file: js/main.js
// - custom cursor
// - nav burger
// - reveal on scroll
// - floating Java code chips
// - background canvas bubbles
// - Java click animation
// - green Matrix-style Java rain
// - mini-game: Bug Hunter

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initNav();
  initReveal();
  initCodeChips();
  initCanvasBubbles();
  initCodeRain();
  initMiniGame(); // 🎮 Bug Hunter game
});

function initCursor() {
  const dot = document.createElement("div");
  const outline = document.createElement("div");
  dot.className = "cursor-dot";
  outline.className = "cursor-outline";
  document.body.append(dot, outline);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animate() {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;
    outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    requestAnimationFrame(animate);
  }
  animate();
}

function initNav() {
  const burger = document.querySelector(".nav-burger");
  const body = document.body;
  if (!burger) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    body.classList.toggle("nav-open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      body.classList.remove("nav-open");
    });
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => observer.observe(el));
}

function initCodeChips() {
  const phrases = [
    "public record PlayerProfile(UUID id, int level) {}",
    "CompletableFuture.runAsync(() -> save(player));",
    "@EventHandler(priority = EventPriority.MONITOR)",
    "rabbitTemplate.convertAndSend(\"oreo.teleport\", payload);",
    "try (var connection = dataSource.getConnection()) {",
    "record Home(String name, Location location) {}",
    "if (!Bukkit.isPrimaryThread()) return;",
    "public interface CrossServerChannel<T> { }"
  ];

  const overlay = document.querySelector(".background-overlay");
  if (!overlay) return;

  const count = 12;
  for (let i = 0; i < count; i++) {
    const chip = document.createElement("div");
    chip.className = "code-chip";
    chip.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    // 👉 Only spawn in left/right gutters
    const side = Math.random() < 0.5 ? "left" : "right";
    const x =
      side === "left"
        ? 6 + Math.random() * 10      // 6–16% (left band)
        : 84 + Math.random() * 10;    // 84–94% (right band)

    // 👉 Spread vertically: 10–80% of viewport height
    const y = 10 + Math.random() * 70; // vh

    const delay = Math.random() * 18;

    chip.style.left = x + "%";
    chip.style.top = y + "vh";
    chip.style.animationDelay = `-${delay}s`;

    overlay.appendChild(chip);
  }
}


function initCanvasBubbles() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const bubbles = [];
  const COUNT = 30;

  function randColorPair() {
    const arr = [
      ["rgba(244, 114, 182, 0.5)", "rgba(56, 189, 248, 0.4)"],
      ["rgba(236, 72, 153, 0.5)", "rgba(129, 140, 248, 0.4)"],
      ["rgba(251, 146, 60, 0.5)", "rgba(56, 189, 248, 0.4)"]
    ];
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function createBubble() {
    const r = Math.random() * 40 + 30;
    return {
      x: Math.random() * width,
      y: height + r + Math.random() * height,
      r,
      v: Math.random() * 0.4 + 0.2,
      alpha: Math.random() * 0.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
      color: randColorPair()
    };
  }

  function resetBubbles() {
    bubbles.length = 0;
    for (let i = 0; i < COUNT; i++) bubbles.push(createBubble());
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const t = Date.now() / 2000;

    for (const b of bubbles) {
      b.y -= b.v;
      b.x += Math.sin(t + b.phase) * 0.2;

      if (b.y + b.r < 0) {
        Object.assign(b, createBubble());
        b.y = height + b.r;
      }

      const g = ctx.createRadialGradient(
        b.x - b.r * 0.3,
        b.y - b.r * 0.3,
        b.r * 0.18,
        b.x,
        b.y,
        b.r
      );
      g.addColorStop(0, "rgba(248, 250, 252," + (b.alpha + 0.15) + ")");
      g.addColorStop(0.4, b.color[0]);
      g.addColorStop(1, b.color[1]);

      ctx.beginPath();
      ctx.fillStyle = g;
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    resetBubbles();
  });

  resetBubbles();
  draw();
}

// === Java click animation ===
const javaClickSnippets = [
  "public class OreoEssentials {}",
  "record Home(String name, Location loc) {}",
  "@EventHandler(priority = EventPriority.MONITOR)",
  "CompletableFuture.runAsync(() -> save())",
  "public interface CrossServerChannel<T> {}",
  "try (var conn = dataSource.getConnection()) {}"
];

window.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

  const el = document.createElement("span");
  el.className = "click-pulse";
  el.textContent =
    javaClickSnippets[Math.floor(Math.random() * javaClickSnippets.length)];

  el.style.left = `${e.clientX}px`;
  el.style.top = `${e.clientY}px`;

  document.body.appendChild(el);

  el.addEventListener("animationend", () => {
    el.remove();
  });
});

// === Matrix-style Java code rain ===
function initCodeRain() {
  const canvas = document.getElementById("code-rain");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const chars = [
    "0","1","{","}","(",")",";","<",">","=",
    "p","u","b","l","i","c"," ","c","l","a","s","s",
    "@","E","v","e","n","t","H","a","n","d","l","e","r"
  ];

  const fontSize = 14;
  let columns = Math.floor(width / fontSize);
  const drops = new Array(columns).fill(0).map(() => Math.random() * height);

  function draw() {
    ctx.fillStyle = "rgba(2, 6, 23, 0.18)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + "px 'Space Grotesk', monospace";
    ctx.fillStyle = "#22c55e";

    for (let i = 0; i < columns; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      } else {
        drops[i] += 1;
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops.length = 0;
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * height;
    }
  });

  draw();
}
// === Tiny sound helper for the mini-game ===
let miniGameAudioCtx = null;

function playMiniGameBeep(freq = 880, duration = 0.12, type = "square", volume = 0.25) {
  try {
    // Create audio context lazily on first user interaction
    if (!miniGameAudioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      miniGameAudioCtx = new AudioCtx();
    }

    const ctx = miniGameAudioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);

    // Smooth fade-out
    gain.gain.setTargetAtTime(0, now + duration * 0.4, 0.08);
  } catch {
    // If browser blocks audio, just silently ignore
  }
}

// === Mini game: Bug Hunter (Java) ===
function initMiniGame() {
  const grid = document.getElementById("miniGameGrid");
  const startBtn = document.getElementById("miniGameStart");
  const scoreEl = document.getElementById("miniGameScore");
  const timeEl = document.getElementById("miniGameTime");
  const statusEl = document.getElementById("miniGameStatus");

  // if we're on another page (oreoessentials.html / afelia.html), just skip
  if (!grid || !startBtn || !scoreEl || !timeEl) return;

  const GRID_COLS = 6;              // number of columns in the grid
  const GRID_ROWS = 4;              // rows
  const ROUND_DURATION = 30000;     // 30s round
  const BUG_SPAWN_INTERVAL = 700;   // ms between spawns
  const BUG_LIFETIME = 1400;        // ms before a bug counts as "missed"
  const MAX_MISSED = 10;            // after this, game over

  let cells = [];
  let running = false;
  let score = 0;
  let missed = 0;
  let roundStartTime = 0;
  let timerId = null;
  let spawnId = null;

  // build the grid once
  function buildGrid() {
    grid.innerHTML = "";
    cells = [];
    grid.style.gridTemplateColumns = `repeat(${GRID_COLS}, minmax(0, 1fr))`;

    const total = GRID_COLS * GRID_ROWS;
    for (let i = 0; i < total; i++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "mini-game-cell";
      cell.dataset.hasBug = "false";
      grid.appendChild(cell);
      cells.push(cell);
    }
  }

  function resetState() {
    running = false;
    score = 0;
    missed = 0;
    roundStartTime = 0;
    scoreEl.textContent = "0";
    timeEl.textContent = "30";
    statusEl.textContent =
      "Click the red exceptions to fix them. Missing too many bugs will end the game early.";

    cells.forEach((c) => {
      c.dataset.hasBug = "false";
      c.classList.remove("bug");
    });

    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    if (spawnId) {
      clearInterval(spawnId);
      spawnId = null;
    }
  }

function endGame(reason) {
  if (!running) {
    // allow multiple reasons without stacking sounds
    return;
  }

  running = false;

  // Different sound depending on reason
  if (reason.startsWith("Time’s up")) {
    playMiniGameBeep(520, 0.16, "triangle", 0.26);
  }

    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    if (spawnId) {
      clearInterval(spawnId);
      spawnId = null;
    }

    // clear all bugs
    cells.forEach((c) => {
      c.dataset.hasBug = "false";
      c.classList.remove("bug");
    });

    startBtn.textContent = "Play again";
    statusEl.textContent = `${reason} Final score: ${score}.`;
  }

  function spawnBug() {
    if (!running) return;

    // pick a random cell that doesn't already have a bug
    const available = cells.filter((c) => c.dataset.hasBug === "false");
    if (available.length === 0) return;

    const cell = available[Math.floor(Math.random() * available.length)];
    cell.dataset.hasBug = "true";
    cell.classList.add("bug");

    // after BUG_LIFETIME, if it's still a bug, count as missed
    setTimeout(() => {
      if (!running) return;
      if (cell.dataset.hasBug === "true") {
        cell.dataset.hasBug = "false";
        cell.classList.remove("bug");
        missed++;

if (missed >= MAX_MISSED) {
  playMiniGameBeep(260, 0.18, "sine", 0.3); // low fail tone
  endGame("Too many uncaught exceptions! ");
}

      }
    }, BUG_LIFETIME - 50);
  }

function startRound() {
  resetState();
  running = true;
  roundStartTime = performance.now();
  startBtn.textContent = "Restart";

  playMiniGameBeep(1040, 0.12, "sawtooth", 0.23); // 🔊 start sound

  // timer loop
  timerId = setInterval(() => {
    const elapsed = performance.now() - roundStartTime;
    const remaining = Math.max(0, ROUND_DURATION - elapsed);
    const seconds = Math.ceil(remaining / 1000);
    timeEl.textContent = String(seconds);

    if (remaining <= 0) {
      endGame("Time’s up. ");
    }
  }, 150);

  // spawn loop
  spawnId = setInterval(() => {
    if (!running) return;
    spawnBug();
  }, BUG_SPAWN_INTERVAL);
}


  // click handler for cells
  grid.addEventListener("click", (e) => {
    if (!running) return;
    const cell = e.target.closest(".mini-game-cell");
    if (!cell) return;

if (cell.dataset.hasBug === "true") {
  cell.dataset.hasBug = "false";
  cell.classList.remove("bug");
  score++;
  scoreEl.textContent = String(score);
  playMiniGameBeep(1320, 0.09, "square", 0.28); // 🔊 hit sound
    }
  });

  // start button
  startBtn.addEventListener("click", () => {
    startRound();
  });

  buildGrid();
}