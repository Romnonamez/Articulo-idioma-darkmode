const article = document.getElementById("main")
const darkMode = document.getElementById("dark-mode")
let dark = false
function changeMode() {
    if (dark == false) {
        article.style.backgroundColor = "#1d1d1d"
        article.style.color = "#f5f2eb"
        dark = true
    } else {
        article.style.backgroundColor = "#f5f2eb"
        article.style.color = "#1d1d1d"
        dark = false
    }
}
darkMode.addEventListener('click', changeMode)
