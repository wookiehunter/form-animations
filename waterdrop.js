const danceBtn = document.getElementById('dance-btn')

danceBtn.addEventListener("click", () => {
    danceBtn.classList.toggle('dancing')
    if (danceBtn.innerHTML === "Dance") {
        danceBtn.innerHTML = "Stand"
    } else {
        danceBtn.innerHTML = "Dance"
    }
}) 