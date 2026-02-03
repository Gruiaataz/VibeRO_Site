// loading -> site
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("site").style.display = "block";
}, 5000);

// cursor punct
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// modals
function openAbout() {
    document.getElementById("aboutModal").style.display = "flex";
}

function openOwner() {
    document.getElementById("ownerModal").style.display = "flex";
}

function closeModals() {
    document.getElementById("aboutModal").style.display = "none";
    document.getElementById("ownerModal").style.display = "none";
}
