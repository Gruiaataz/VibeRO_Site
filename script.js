// LOADING
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("site").style.display = "block";
}, 5000);

// CURSOR
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// MODALS
function openAbout() {
    document.getElementById("aboutModal").style.display = "flex";
}

function openOwner() {
    document.getElementById("ownerModal").style.display = "flex";
}

function closeModals() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// MUZICA (PC + MOBILE SAFE)
const music = document.getElementById("bgMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// porneste muzica la primul click (browser rule)
document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });
