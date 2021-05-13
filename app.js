
var health = 100
var name = "name"
var hits = 0

updateHit()
updateHealth()

function slap() {
    hits = hits + 1
    health -= 1
    updateHealth()
    updateHits()
}
function punch() {
    health -= 5
    hits += 1
    updateHealth()
    updateHits()
}
function kick() {
    health -= 10
    hits += 1
    updateHealth()
    updateHits()
}


function updateHealth() {
    let template = health
    let healthElem = document.getElementById("health")
    healthElem.innerHTML = template
}
function updateHit() {
    let template = hits
    let hitElem = document.getElementById("hits")
    hitElem.innerHTML = template
}