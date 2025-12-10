// file: js/sound.js (CRITICAL FIX)

let audioCtx = null;
let winBuffer = null;
let looseBuffer = null;

// Initialize AudioContext and load audio files
document.addEventListener("DOMContentLoaded", () => {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
            audioCtx = new AudioCtx();
            loadAudio('/audio/win.wav', (buffer) => { winBuffer = buffer; }); // Assuming /audio/ folder
            loadAudio('/audio/loose.wav', (buffer) => { looseBuffer = buffer; }); // Assuming /audio/ folder
        }
    } catch (e) {
        console.warn("AudioContext not supported or blocked.", e);
    }
});

// Helper function to fetch and decode audio data
function loadAudio(url, callback) {
    if (!audioCtx) return;
    
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            callback(audioBuffer);
        })
        .catch(e => console.error("Error loading audio:", url, e));
}

// Function to play a sound buffer
function playSound(buffer) {
    if (!audioCtx || !buffer) return;

    // *** FIX: Resume context if suspended (common in mobile/Chrome) ***
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    // *****************************************************************

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start(0);
}

// Global functions exposed to other scripts
window.SoundManager = {
    playWin: () => {
        playSound(winBuffer);
    },
    playLoose: () => {
        playSound(looseBuffer);
    }
};