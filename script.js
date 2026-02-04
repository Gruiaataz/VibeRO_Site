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

// MUZICA – PORNESTE LA CLICK STANGA
const music = document.getElementById("bgMusic");
let musicStarted = false;

document.addEventListener("mousedown", () => {
    if (!musicStarted) {
        music.play().catch(() => {});
        musicStarted = true;
    }
});
