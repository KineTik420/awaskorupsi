// ── Login Modal ──
const loginBtn = document.getElementById("loginBtn");
const modal    = document.getElementById("loginModal");
const closeBtn = document.querySelector(".modal-close");

if (loginBtn && modal && closeBtn) {
    loginBtn.onclick = function () {
        modal.style.display = "block";
    };

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// ── Word Counter (report.html only) ──
function countWords() {
    const textarea = document.getElementById("incident");
    const counter  = document.getElementById("wordCount");
    if (!textarea || !counter) return;

    const text = textarea.value.trim();
    counter.innerText = text === "" ? 0 : text.split(/\s+/).length;
}

// ── Submit Report (report.html only) ──
function submitReport() {
    const titleEl    = document.getElementById("title");
    const incidentEl = document.getElementById("incident");
    if (!titleEl || !incidentEl) return;

    const title    = titleEl.value.trim();
    const incident = incidentEl.value.trim();

    if (!title || !incident) {
        alert("Please fill in both the title and the incident description.");
        return;
    }

    console.log("Title:", title);
    console.log("Incident:", incident);
    alert("Your report has been submitted and will remain anonymous. Thank you.");

    titleEl.value    = "";
    incidentEl.value = "";
    countWords();
}
