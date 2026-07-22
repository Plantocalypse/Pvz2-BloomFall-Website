// Automatically Create Falling Rain Particles
function createRain() {
    const hero = document.getElementById('heroSection');
    if (!hero) return; // Prevent errors if the element is not found

    const rainCount = 60; // Total number of active rain drops on the screen

    for (let i = 0; i < rainCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('rain-particle');

        // Set a random horizontal position
        drop.style.left = Math.random() * 100 + 'vw';

        // Set a random size (thin and long for realistic rain look)
        const width = Math.random() * 1 + 1; 
        const height = Math.random() * 15 + 15; 
        drop.style.width = width + 'px';
        drop.style.height = height + 'px';

        // Set fast animation duration and random delay for a natural rain effect
        drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';

        hero.appendChild(drop);
    }
}

// Music Button Controller (Play / Pause)
function setupMusicController() {
    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    if (!audio || !musicBtn) return; // Prevent errors if the element is not found

    audio.volume = 0.4;
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                musicBtn.innerHTML = "⏸️ Pause Music";
            }).catch(err => {
                console.log("Failed to play audio:", err);
            });
        } else {
            audio.pause();
            isPlaying = false;
            musicBtn.innerHTML = "🎵 Play Music";
        }
    });
}

// Run all functions when the document is ready
window.addEventListener('DOMContentLoaded', () => {
    setupMusicController();
    createRain();
});
