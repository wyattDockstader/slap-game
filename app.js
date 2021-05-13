
var health = 100
var name = "name"
var hits = 0

updateHits()
updateHealth()
// worsen()

function slap() {
    hits += 1
    health -= 1
    updateHealth()
    updateHits()
    kill()
    downHill()
}
function punch() {
    health -= 5
    hits++
    updateHealth()
    updateHits()
    kill()
    downHill()
}
function kick() {
    health -= 10
    hits++
    updateHealth()
    updateHits()
    kill()
    downHill()
}


function updateHealth() {
    let template = health
    let healthElem = document.getElementById("health")
    healthElem.innerHTML = template
}
function updateHits() {
    let template = hits
    let hitElem = document.getElementById("hits")
    hitElem.innerHTML = template
    console.log("hits")
}
function downHill() {
    if (health >= 70) {
        document.getElementById("target").src = "https://assets.airmail.news/static/images/BAh7CEkiCGdpZAY6BkVUSSIzZ2lkOi8vYWlyLW1haWwvQXJ0aWNsZTo6UGhvdG8vMzU4OTU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--5276ec533aaed5cfa11d4f0b5ad89cf70eacc93b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpQ1RneU1ENEdPd1pVT2hCaGRYUnZYMjl5YVdWdWRGUTZESEYxWVd4cGRIbHBhUT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--9f1042b9c088c6ba97f7b06fd8c724bd4cf39745/photo-1606922653.jpeg"
    } else if (health >= 40 && health <= 69) {
        document.getElementById("target").src = "https://campustocareer.files.wordpress.com/2011/06/wile-e-coyote-5000806.jpg?w=640"
    } else if (health <= 0) {
        document.getElementById("target").src = "https://www.postcarbon.org/wp-content/uploads/2018/08/Wile-e-coyote-800.jpg"
    }
}


function kill() {
    if (health <= 0) {
        document.getElementById("button-section").classList.add("d-none")
        document.getElementById("dead").classList.add("bg-danger")

    }
}