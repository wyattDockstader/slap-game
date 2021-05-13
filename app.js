
var health = 100

function slap() {
    health -= 1
    update()
}
function update() {
    let template = health
    let healthElem = document.getElementById("health")
    healthElem.innerHTML = template
}