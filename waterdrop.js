const danceBtn = document.getElementById('dance-btn')

danceBtn.addEventListener("click", () => {
    danceBtn.classList.toggle('dancing')
    if (danceBtn.innerHTML === "Clicked") {
        danceBtn.innerHTML = "Click"
    } else {
        danceBtn.innerHTML = "Clicked"
    }
}) 