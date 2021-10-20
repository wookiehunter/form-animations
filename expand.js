const expandBtn = document.getElementById('expanding')

expandBtn.addEventListener("click", () => {
    expandBtn.classList.toggle('active')
    if (expandBtn.innerHTML === "Sent") {
        expandBtn.innerHTML = "Send"
    } else {
        expandBtn.innerHTML = "Sent"
    }
})