const explodeBtn = document.getElementById('explodeBtn')
const Boom = document.getElementById('Boom')

explodeBtn.addEventListener('click', () => {
    setInterval(addActiveClass(), 1000)
})

function addActiveClass() {
    explodeBtn.innerHTML = 'Bye!'
    setInterval(function(){explodeBtn.classList.add('active')}, 3000)
    setExplosion()
}

function setExplosion() {
    setInterval(function(){Boom.classList.remove('boom')},3000)
}