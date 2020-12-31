document.addEventListener("DOMContentLoaded", () => {
    let errorsDetected = document.getElementById("errorsDetected");

    errorsDetected.onclick = () => {
        errorsDetected.style.display = "none";
    }

    window.addEventListener("error", () => {
        errorsDetected.style.display = "block";
    });
});